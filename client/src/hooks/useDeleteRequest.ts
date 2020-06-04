import { useState } from 'react';

function useDeleteRequest(endpoint: string) {
  const [removedItemId, setRemovedItemId] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [removed, setRemoved] = useState(false);
  const [error, setError] = useState('');

  async function action(id: string) {
    try {
      setDeleting(true);
      setRemovedItemId(id);
      const response = await fetch(`${process.env.REACT_APP_API_URL}${endpoint}/${id}`, {
        method: 'DELETE',
      });

      if (response.status === 404) {
        throw new Error('NotFound');
      } else if (response.status === 500) {
        throw new Error('internalServerError');
      }

      if (response.ok) {
        setDeleting(false);
        setRemoved(true);
      }
    } catch (error) {
      setError(error);
      setDeleting(false);
      setRemoved(false);
    }
  }

  return {
    deleting,
    removed,
    action,
    error,
    removedItemId,
  };
}

export default useDeleteRequest;
