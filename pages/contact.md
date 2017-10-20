---
title: Contact Us
subtitle: Contact Us
lead: Feel Free to Contact Us
layout: page
permalink: "/contact/"
published: true
order: 13
---

<div class="container">
  <center><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1122379979593!2d101.52209721429934!3d3.0646568977682502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc529d53b27b21%3A0xfc01735c6cc2bf89!2sLocalhost+Sdn.+Bhd.!5e0!3m2!1sen!2smy!4v1508388710408" width="100%" height="450"  style="border:10" allowfullscreen></iframe></center>
  <br>
  <div class ="row">
    <div class="col-md-4">
      <div class="card mb-3 h-100" >
        <center class="card-header">KLANG VALLEY</center>
        <div class="card-body" style="font-size: 12px;">
          <center class="card-title"><h4>LOCALHOST SDN BHD</h4></center>
          <p class="card-text">
          NO 29-2, TINGKAT 2, JALAN TUKUL N15/N,
          SEKSYEN 15, 40200 SHAH ALAM,
          SELANGOR, MALAYSIA.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style="font-size: 13px;">
            <span><i class="fa fa-phone"></i> / <i class="fa fa-fax"></i> +603 5523 4445</span> |
            <span><i class="fa fa-envelope"></i> hello@localhost.my</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-md-8">
      <div class ="card mb-3 h-100">
        <div class="card-body">
          <form>
            <div class="row">
              <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-address-card-o"></i>
                      </span>
                      <input type="text" class="form-control" id="name" placeholder="Enter name" required="required" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email">Email Address</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-envelope-o"></i>
                      </span>
                      <input type="email" class="form-control" id="email" placeholder="Enter email" required="required" />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="subject">Subject</label>
                    <div class="input-group">
                      <span class="input-group-addon"><i class="fa fa-check"></i>
                      </span>
                      <select id="subject" name="subject" class="form-control" required="required">
                      <option value="na" selected="">Choose One:</option>
                      <option value="service">General Customer Service</option>
                      <option value="suggestions">Suggestions</option>
                      <option value="product">Product Support</option>
                    </select>
                    </div>
                  </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="name">Message</label>
                  <textarea name="message" id="message" class="form-control" rows="9" cols="25" required="required" placeholder="Message"></textarea>
                </div>
              </div>
              <div class="col-md-12">
                  <button type="submit" class="btn btn-primary pull-right btn-sm" id="btnContactUs"> Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>