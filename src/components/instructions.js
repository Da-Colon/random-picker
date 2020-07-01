import React from "react";
import FormModal from "./views/formModal";
import image_one from "../assets/images/click-gradebook.png";
import image_two from "../assets/images/click-export.png";
import image_three from "../assets/images/exporting.png";
import image_four from "../assets/images/upload-file.png";

const Instructions = () => (
  <FormModal>
    <div className="text-left flex flex-col items-center">
      <div data-cy="instructions-heading" className=" mb-8">
        Thanks for using Who's Next! Let's walk through a few steps to upload your
        first class list! First register or log in to your account on <a href="https://whosnext.netlify.app">whosnext.netlify.app</a> We will then need to
        navigate to your <a href="https://app.schoology.com/" >Schoology account</a> as a DIR
        or instructor. Click on 'Gradebook'
      </div>
      <img className="shadow-lg" alt="Gradebook" src={image_one} width="275" />
      <div className="my-8">
        On the gradebook screen you'll want to click on the veritical ellipsis on
        the top right. Then click on export.
      </div>
      <img className="shadow-lg" alt="Export" src={image_two} width="525" />
      <div className="my-8">
        Here you should be given options on how you want to export the gradebook.
        Make sure to click on the option for 'Gradebook as CSV' then click 'Next'.
        You should see that the file has been downloaded into your downloads
        folder.
      </div>
      <img className="shadow-lg" alt="Exporting" src={image_three} width="525" />
      <div className="my-8">
        Return to <a href="https://whosnext.netlify.app">whosnext.netlify.app</a>. In the account Menu
        (if you are logged in click on your name on the top right). Click the
        button for upload new class list. This form is pretty straight forward.
        Click the button to choose the `gradebook-export.csv' you just downloaded.
        And it generate a class list from the information in the file.
      </div>
      <img className="shadow-lg" alt="Uploading" src={image_four} width="525" />
      <div className="my-8">
        Create a name for the class. You can also add/remove and edit the names in
        the list and then click save to save it to the datebase and as your
        default class list. Once your class has been added your DIR and/or
        instructor may also use the same list by going to the account menu once
        they sign up and clicking on 'Choose Class List' and then finding the name
        of the class you uploaded.
      </div>
      <div>
        Your now ready to go just go to the account
        menu again and head to the Spinner you'll see in the waiting list that you
        class has been loaded and is ready for use!
      </div>
    </div>
  </FormModal>
);

export default Instructions;
