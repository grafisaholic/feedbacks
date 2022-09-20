import { NextApiRequest, NextApiResponse } from 'next';
import { supebase } from '~/libs/supebase';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  supebase.auth.api.setAuthCookie(req, res);
};

export default handler;
