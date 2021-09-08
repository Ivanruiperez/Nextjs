import React, { useEffect } from 'react';
import styles from './styles.module.css';

const Testimonials = ({
  setTestimonials,
  testimonials,
  testimonialsUtils,
  lorem,
}) => {
  useEffect(async () => {
    setTestimonials({ ...testimonials, isLoading: true });
    const res = await fetch('/api/testimonials');
    const data = await res.json();
    setTestimonials({ data, isLoading: false, error: null });
  }, []);

  const renderTestimonials = (data, isLoading, error) => {
    if (isLoading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>Error</div>;
    }
    return data?.length > 0 ? (
      <div>
        {data?.map((testimonial) => (
          <div className={styles.testimonials_box} key={testimonial.name}>
            <img src={testimonialsUtils.image} alt={testimonialsUtils.image} />
            <div className={styles.testimonials_background}>
              <img
                src={testimonialsUtils.background}
                alt={testimonialsUtils.background}
              />
              <span className={styles.testimonials_body}>
                {testimonial.body}
              </span>
              <span className={styles.testimonials_name}>
                {testimonial.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>No data</div>
    );
  };

  return (
    <div className={`${styles.testimonials_section_box} row-xs-12`}>
      <span className={styles.testimonials_section_title}>
        {testimonialsUtils.title}
      </span>
      <span className={styles.testimonials_section_text}>{lorem}</span>
      {renderTestimonials(
        testimonials.data,
        testimonials.isLoading,
        testimonials.error,
      )}
    </div>
  );
};
export default Testimonials;
