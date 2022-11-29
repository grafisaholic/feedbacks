import { Site } from '~/types/global';
import { fetcherWithAuth } from '~/utils/fetcher';

type PayloadSite = Omit<Site, 'id'>;

export const insertNewSite = ({ name, link }: PayloadSite): Promise<any> => {
  const res = fetcherWithAuth('/api/sites/insert', {
    method: 'PUT',
    body: JSON.stringify({ name, link }),
  });

  return res;
};

export const deleteSite = (id: number) => {
  const res = fetcherWithAuth(`/api/sites/delete/${id}`, {
    method: 'DELETE',
  });

  return res;
};

export const getFeedbackSite = (id: number) => {
  const res = fetcherWithAuth(`/api/sites/feedback/${id}`);

  return res;
};
