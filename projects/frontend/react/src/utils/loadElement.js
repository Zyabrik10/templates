export default function loadElement({
  fetchFunc,
  query = '',
  setData,
  setIsNothingFound,
  setLoad,
}) {
  setLoad(true);
  fetchFunc(query)
    .then(({ data }) => {
      if (
        (Array.isArray(data) && data.length === 0) ||
        (typeof data === 'object' && Object.keys(data))
      )
        setIsNothingFound(true);
      else setIsNothingFound(false);

      setData(data);
      setLoad(false);
    })
    .catch(e => {
      console.log(e);
      setLoad(false);
      setIsNothingFound(true);
    });
}
