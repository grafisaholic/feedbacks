import { NextApiRequest, NextApiResponse } from 'next';

import { respErr5xx, resNotAuthorized } from '../_utils';
import { supebase } from '~/libs/supebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user } = await supebase.auth.api.getUserByCookie(req);

    if (user) {
      const { data, error } = await supebase
        .from('sites')
        .select()
        .eq('author_id', user.id)
        .order('created_at', { ascending: false });

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
    if (error instanceof Error) respErr5xx(res, error);
  }
};

export default handler;
