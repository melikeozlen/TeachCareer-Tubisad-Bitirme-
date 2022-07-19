import React from 'react'
import './Contact.scss'
import { FaRegCalendarTimes } from 'react-icons/fa'
const Contact = () => {
  const getDate = () => {
    let count = 0;
    document.querySelector('.getdateButton').onclick = function () {

      count++;
      let myDate = new Date();
      let day = myDate.getDate();
      let month = myDate.getMonth() + 1;
      let year = myDate.getFullYear();
      document.querySelector('.getdateSpan').innerHTML = `
            <i class="fas fa-calendar-alt"></i>
            <span> ${day}/${month}/${year} </span>`;

      if (count % 2 == 0) {
        document.querySelector('.getdateSpan').classList.add('invisible');
      }
      else {
        document.querySelector('.getdateSpan').classList.remove('invisible');
      }

    }
  }
  return (
    <>

      <div id="contact" class="form ">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h2>İLETİŞİM</h2>
              <ul class="list-unstyled li-space-lg">
                <li class="address">Benimle iletişime geçmek isterseniz, mail atabilirsiniz.</li>
                <li><i class="fas fa-map-marker-alt"></i>Altıeylül/BALIKESİR</li>
                <li><i class="fas fa-phone"></i><a class="blue" href="tel:003024630820">+555 555 55 55</a></li>
                <li><i class="fas fa-envelope"></i><a class="blue" href="mailto:office@leno.com">melikeozlen@gmail.com</a></li>
              </ul>
            </div>
          </div>
          <div class=" d-flex justify-content-center align-items-center gap-1 p-2" >
            <button class="btn btn-outline-info getdateButton" onClick={() => getDate()} style={{ widht: "3rem" }}>
              <FaRegCalendarTimes />
            </button>
            <span class="getdateSpan  ">
              <span class="getdateSpan_date"></span>
            </span>
          </div>

          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <form id="contactForm" data-toggle="validator" data-focus="false">
                <div class="form-group">
                  <input type="text" class="form-control-input" id="cname" required />
                  <label class="label-control" for="cname">İsim</label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <input type="email" class="form-control-input" id="cemail" required />
                  <label class="label-control" for="cemail">Email</label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <textarea class="form-control-textarea" id="cmessage" required></textarea>
                  <label class="label-control" for="cmessage">Mesaj</label>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group checkbox">
                  <input type="checkbox" id="cterms" value="Agreed-to-Terms" required />I have read and agree to Melike's stated conditions in <a href="privacy-policy.html">Privacy Policy</a> and <a href="terms-conditions.html">Terms Conditions</a>
                  <div class="help-block with-errors"></div>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control-submit-button">GÖNDER</button>
                </div>
                <div class="form-message">
                  <div id="cmsgSubmit" class="h3 text-center hidden"></div>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </>

  )
}

export default Contact