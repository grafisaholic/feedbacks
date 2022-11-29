import { NextApiResponse } from 'next';

export const respErr5xx = (res: NextApiResponse, error: Error): boolean => {
  res.statusCode = 500;
  res.json({
    success: false,
    data: null,
    error: error,
  });

  return false;
};

export const resNotAuthorized = (res: NextApiResponse): boolean => {
  res.statusCode = 401;
  res.json({
    success: false,
    data: null,
    error: {
      message: 'You not have authorixation on this feature',
    },
  });

  return false;
};
