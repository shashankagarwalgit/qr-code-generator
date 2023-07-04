import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer.prompt([{
   message: "Enter The URL: ",
   name: "URL"
}])
.then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream('url_gen.png'));

    fs.writeFile("URL.txt", url,(err)=>{
        if(err) throw(err);
        console.log("Input URL saved to URL.txt");
      });
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
  });
  