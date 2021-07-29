// /news/id
import { useRouter } from 'next/router';
const Detail = () => {
  const router = useRouter();

  console.log(router.query.id);
  return <div>NEWS DETAIL</div>;
};

export default Detail;
