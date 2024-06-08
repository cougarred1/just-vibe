import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

module.exports = {
  // save artist to the db
  saveArtist: (req: Request, res: Response) => {
    const { artistName } = req.body;

    prisma.artist.create({
      data: {
        name: artistName,
        description: 'N/A'
      }
    })
      .then((data: any) => res.sendStatus(201))
      .catch((err: any) => {
        console.error('Could not save artist', err);
        res.sendStatus(500);
      });
  },

  // save album to the db
  saveAlbum: (req: Request, res: Response) => {
    const { albumName, artistName, image }: { albumName: string, artistName: string, image: string} = req.body;

    prisma.album.create({
      data: {
        albumName,
        artistName,
        image,
      }
    })
    .then((data: any) => res.sendStatus(201))
    .catch((err: any) => {
      console.error('Could not save album', err);
      res.sendStatus(500);
    });
  },

}