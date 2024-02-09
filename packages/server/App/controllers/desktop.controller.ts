import type { Request, Response } from 'express';
import { DesktopService } from '../db/services';

class DesktopAPI {
  public static getAll = async (
    _request: Request,
    response: Response,
  ): Promise<any> => {
    try {
      const elements = await DesktopService.getAll();

      const newElements = elements.map(({ id, x, y, Folders, Elements }) => {
        if (Folders.length) {
          return {
            id,
            folderId: Folders[0].id,
            position: { x, y },
            name: Folders[0].name,
            type: 'folder',
            icon: 'folder',
          };
        }
        const { name, icon, type, id: elementId } = Elements[0];

        return {
          id,
          elementId,
          position: {
            x,
            y,
          },
          name,
          icon,
          type,
        };
      });

      return response.status(200).json(newElements);
    } catch (error) {
      console.info(error);

      return response.status(400).send(error);
    }
  };
}

export default DesktopAPI;
