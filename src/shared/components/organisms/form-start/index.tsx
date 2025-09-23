import SlideContent from "../../molecules/SlideContent";
import Text from "@/shared/components/atoms/text";
import { Input } from "@/shared/components/atoms/input";
import { Select } from "@/shared/components/atoms/select";
import { Textarea } from "@/shared/components/atoms/textarea";
import { WorkingHoursItem } from "@/shared/components/molecules/WorkingHoursItem";

import "./style.scss";

const FormStart = () => {
  return (
    <section className="form-start">
      <div className="container">
        {/* Top */}
        <div className="top-contain">
          <div className="left">
            <SlideContent
              subtitle="Book An Appointment"
              subtitleAs="h6"
              title={
                <>
                  Effortless Online Booking for{" "}
                  <span>Your Laboratory Visit</span>
                </>
              }
              titleAs="h3"
            />
          </div>
          <div className="right">
            <Text as="p">
              We believe in a future where renewable energy sources play a vital
              role in reducing carbon emissions. We provide a wide range of
              diagnostic services ranging from complete health check-up packages.
            </Text>
          </div>
        </div>

        {/* Bottom */}
        <div className="bottom-contain">
          {/* Left - Form */}
          <div className="left form-start">
            <form id="contact-form" method="post" action="" className="form-wrapper">
              <div className="form-row">
                <Input
                  id="form_name"
                  name="name"
                  type="text"
                  placeholder="Enter Your Name"
                  label="Your Name"
                  required
                />
                <Input
                  id="form_email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  label="Email Address"
                  required
                />
              </div>

              <div className="form-row">
                <Input
                  id="form_phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter Phone Number"
                  label="Phone Number"
                  required
                />
                <Select id="form_service" name="service" required label="Select Service" defaultValue="">
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="pathology">Pathology</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="chemical">Chemical</option>
                </Select>
              </div>

              <Textarea
                id="form_message"
                name="message"
                rows={4}
                placeholder="Write Your Message Here..."
                label="Message"
                required
              />

              <div className="form-submit">
                <a href="#" className="appointment-btn uppercase">
                  Book an Appointment
                </a>
              </div>
            </form>
          </div>

          {/* Right - Working Hours */}
          <div className="right">
            <div className="primary-bg">
              <h4>Clinic Hours</h4>

              <WorkingHoursItem day="Mon - Tues" time="09:00AM - 6:00PM" />
              <hr className="border-t border-white border-opacity-10" />

              <WorkingHoursItem day="Wed - Thu" time="09:00AM - 6:00PM" />
              <hr className="border-t border-white border-opacity-10" />

              <WorkingHoursItem day="Fri - Sat" time="09:00AM - 6:00PM" />
              <hr className="border-t border-white border-opacity-10" />

              <WorkingHoursItem day="Emergency" time="24/7 Hours 7 Days" last />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormStart;
