import { NextApiRequest, NextApiResponse } from 'next';
import { supebase } from '~/libs/supebase';

import { resNotAuthorized, respErr5xx } from '../_utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { name, link } = req.body;
    const { user } = await supebase.auth.api.getUserByCookie(req);

    if (user) {
      if (link.indexOf('http://') === -1 && link.indexOf('https://') === -1) {
        res.statusCode = 500;
        res.json({
          success: false,
          data: null,
          error: {
            message: 'Your link not contain http:// or https://',
          },
        });

        return false;
      }

      const { data, error } = await supebase.from('sites').insert([
        {
          name: name,
          link: link,
          author_id: user.id,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        res.statusCode = 400;
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
  } catch (error) {
    if (error instanceof Error) {
      respErr5xx(res, error);
    }
  }
};

export default handler;
