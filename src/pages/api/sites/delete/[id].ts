import { NextApiRequest, NextApiResponse } from 'next';

import { supebase } from '~/libs/supebase';
import { resNotAuthorized, respErr5xx } from '../../_utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;

    const { user } = await supebase.auth.api.getUserByCookie(req);
    const { data: existingData } = await supebase
      .from('sites')
      .select()
      .eq('id', id)
      .single();

    if (existingData && existingData.author_id) {
      if (existingData.author_id == user?.id) {
        const { data, error } = await supebase
          .from('sites')
          .delete()
          .match({ id: id });

        if (error) {
          res.statusCode = 403;
        } else {
          res.statusCode = 200;
        }

        res.json({
          success: !error,
          data: data,
          error: error,
        });
      } else {
        resNotAuthorized(res);
      }
    } else {
      resNotAuthorized(res);
    }
  } catch (error) {
    if (error instanceof Error) respErr5xx(res, error);
  }
};

export default handler;
