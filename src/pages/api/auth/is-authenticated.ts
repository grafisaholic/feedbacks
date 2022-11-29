import { NextApiRequest, NextApiResponse } from 'next';
import { supebase } from '~/libs/supebase';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { user, error } = await supebase.auth.api.getUserByCookie(req);

    if (!error && user?.id) {
      res.statusCode = 200;
      res.json({
        success: true,
        isLogin: !!user,
        user: {
          email: user.email,
          name: user.user_metadata.name,
          picture: user.user_metadata.picture,
        },
      });
    } else {
      res.statusCode = 401;
      res.json({
        success: true,
        isLogin: !!user,
        error: error || {
          message: 'you have no authorization to perform this action',
        },
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      isLogin: false,
      error: error,
    });
  }
};

export default handler;
