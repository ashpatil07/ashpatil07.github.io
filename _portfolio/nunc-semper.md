---
layout: portfolio/with-slider
title: "Nunc semper"
sub_title: "Aenean lacinia bibendum nulla sed consectetur"
classic_nav: true
image: "/assets/images/art/m10.webp"
sm_image: "/assets/images/art/p10.webp"
big_image: "/assets/images/art/p10-full.webp"
grouped_by: masonry
link: "/"
filters:
  - corporate
---

<div class="basic-slider owl-carousel" data-margin="5">
  <div class="item"><img src="/assets/images/art/pp2-1.webp" alt="" /></div>
  <div class="item"><img src="/assets/images/art/pp2-2.webp" alt="" /></div>
  <div class="item"><img src="/assets/images/art/pp2-3.webp" alt="" /></div>
</div>
<!-- /.basic-slider -->
<div class="space50"></div>
<div class="row">
  <div class="col-lg-10 offset-lg-1">
    <h2>About the Project</h2>
    <div class="row no-gutters">
      <div class="col-md-9 text-justify">
        <p class="lead">Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis.</p>
        <p>Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
        <a href="#" class="btn">See Project</a>
      </div>
      <!--/column -->
      <div class="col-md-2 ml-auto">
        <ul class="list-unstyled">
          <li>
            <h5 class="mb-5">Date</h5>
            <p>{{page.date | date_to_string}}</p>
          </li>
          <li>
            <h5 class="mb-5">Categories</h5>
            <p>{{page.filters | join: ", "}}</p>
          </li>
          <li>
            <h5 class="mb-5">Client Name</h5>
            <p>{{page.client_name}}</p>
          </li>
        </ul>
      </div>
      <!--/column -->
    </div>
    <!--/.row -->
  </div>
  <!-- /column -->
</div>
<!-- /.row -->
