import type { Request, Response } from 'express';
import { FoldersService } from '../db/services';

class FoldersAPI {
  public static getChildsById = async (
    request: Request,
    response: Response,
  ): Promise<any> => {
    try {
      const { id } = request.params;

      const children = await FoldersService.findAllChildsById(+id);
      const newChildren = children.map((item: any, index: number) => {
        const { type, id, name, icon } = item;

        if (!type) {
          return {
            id: Date.now() + index,
            name,
            elementId: id,
            type: 'folder',
            icon: 'folder',
          };
        }

        return {
          id: Date.now() + index,
          elementId: id,
          name,
          type,
          icon,
        };
      });

      return response.status(200).json({ items: newChildren });
    } catch (error) {
      console.info(error);

      return response.status(400).send(error);
    }
  };
}

export default FoldersAPI;
