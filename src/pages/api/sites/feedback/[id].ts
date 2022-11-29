import { NextApiRequest, NextApiResponse } from 'next';
import { supebase } from '~/libs/supebase';

import { respErr5xx } from '../../_utils';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id;

    const { data, error } = await supebase
      .from('feedbacks')
      .select()
      .eq('site_id', id);

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
  } catch (error) {
    if (error instanceof Error) respErr5xx(res, error);
  }
};

export default handler;
