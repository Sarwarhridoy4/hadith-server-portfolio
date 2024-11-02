import {Request, Response} from 'express';

import Hadith from "../models/hadith";

export const getAllHadith = async (_req: Request, res: Response) => {
  try {
    const hadiths = await Hadith.find({});
    res.json(hadiths);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getRandomHadith = async (_req: Request, res: Response) => {
  try {
    const randomHadith = await Hadith.aggregate([{ $sample: { size: 1 } }]);
    res.json(randomHadith[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchHadith = async (req: Request, res: Response) => {
  try {
    const { field, query } = req.params;
    const searchField = field.toLowerCase();
    const searchQuery = query.toLowerCase();

    const fieldMapping: { [key: string]: string } = {
      hadith: "hadith",
      narrator: "narrator",
      source: "source",
      reference: "reference",
    };

    const fieldToSearch = fieldMapping[searchField];

    if (!fieldToSearch) {
      return res.status(400).json({ error: "Invalid search field" });
    }

    const matchingHadith = await Hadith.find({
      [fieldToSearch]: { $regex: searchQuery, $options: "i" },
    });

    return res.json(matchingHadith);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const welcomeMessage = (_req: Request, res: Response) => {
  res.send("Welcome to my random hadith server");
};
