import { ReactGoogleReviews } from 'react-google-reviews';
import "react-google-reviews/dist/index.css";

const Testimonials = () => {
  const featurableWidgetId = "5782aaae-daa1-4a8f-8643-e5e21de1daf7";

  return (
    <div className='text-center'>
      <h2 className='mb-14 text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-default'>- Avaliações do Google -</h2>
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
    </div>
  );
};

export default Testimonials;