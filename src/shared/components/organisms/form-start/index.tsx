import '@/shared/components/organisms/form-start/style.scss';

const FormStart = () => {
  return (
    <section className="form-start">
      <div className="container">
        <div className="top-contain">
          <div className="left">
            <h6>Book An Appointment</h6>
            <h3>
              Effortless Online Booking for <span>Your Laboratory Visit</span>
            </h3>
          </div>
          <div className="right">
            <p>
              We believe in a future where renewable energy sources play a vital role in reducing
              carbon emissions. We provide a wide range of diagnostic services ranging from complete
              health check-up packages.
            </p>
          </div>
        </div>

        <div className="bottom-contain">
          <div className="left form-start">
            <form id="contact-form" method="post" action="" className="form-wrapper">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form_name">Your Name</label>
                  <input
                    id="form_name"
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form_email">Email Address</label>
                  <input
                    id="form_email"
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="form_phone">Phone Number</label>
                  <input
                    id="form_phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter Phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="form_service">Select Service</label>
                  <select id="form_service" name="service" required defaultValue="">
                    <option value="1">Select Service</option>
                    <option value="2">Pathology</option>
                    <option value="3">Diabetes</option>
                    <option value="1">Chemical</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="form_message">Message</label>
                <textarea
                  id="form_message"
                  name="message"
                  rows={4}
                  placeholder="Write Your Message Here..."
                  required></textarea>
              </div>

              <div className="form-submit">
                <a href="#" className="appointment-btn uppercase">
                  {' '}
                  Book an Appointment{' '}
                </a>
              </div>
            </form>
          </div>

          <div className="right">
            <div className="primary-bg">
              <h4>Clinic Hours</h4>

              <div className="working-hours-item">
                <span className="working-day">Mon - Tues</span>
                <span className="working-time">09:00AM - 6:00PM</span>
              </div>
              <hr className="border-t border-white border-opacity-10" />
              <div className="working-hours-item">
                <span className="working-day">Wed - Thu</span>
                <span className="working-time">09:00AM - 6:00PM</span>
              </div>
              <hr className="border-t border-white border-opacity-10" />
              <div className="working-hours-item">
                <span className="working-day">Fri - Sat</span>
                <span className="working-time">09:00AM - 6:00PM</span>
              </div>
              <hr className="border-t border-white border-opacity-10" />
              <div className="working-hours-item last">
                <span className="working-day">Emergency</span>
                <span className="working-time">24/7 Hours 7 Days</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormStart;
