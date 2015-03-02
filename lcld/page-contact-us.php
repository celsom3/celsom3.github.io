<?php include 'header.php'; ?>

<div class="container">
  <div class="row">
    <div class="col-lg-6 col-md-6">
      <h1>Contact Us</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. </p>
    </div>

    <div class="col-lg-6 col-md-6" id="contact-form">
      <form>
        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Your Name">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        </div>


        <div class="form-group">
          <label for="exampleInputPassword1">Comments</label>
          <textarea rows="4" class="form-control" id="contact-textarea"></textarea>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>

  </div>
</div>

<?php include 'footer.php'; ?>