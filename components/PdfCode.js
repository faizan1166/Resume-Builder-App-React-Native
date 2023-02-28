const PdfCode = (
  pname,
  lname,
  email,
  phone,
  skills,
  collegeName,
  course,
  project,
  projectDes,
  hobbies,
  career,
  image
) => `
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
</head>
<body >
  

<div style=" max-width: 700px;   
background: #fff;
margin: 0px auto 0px; 
box-shadow: 1px 1px 2px #DAD7D7;
border-radius: 3px;  
padding: 40px;
margin-top: 50px;
font-family: 'Lato', sans-serif;
min-height: 100%;  

font-family: 'Lato', sans-serif;
font-weight: 400;
color: #222;
font-size: 14px;
line-height: 26px;
padding-bottom: 50px;">
<div style="margin-bottom: 30px;">
<div style="display: flex; " class="full-name">
<span style="font-size: 40px;
text-transform: uppercase;
margin-bottom: 5px;
">${pname}</span> 
<span style="font-weight: 300;">${lname}</span>
<div>
  <img style="margin-left:340px; margin-top:20px" src="${image}"/>
</div>
</div>
<div style="    margin-bottom: 20px;">
<span style=" color: #999;
font-weight: 300;">Email: </span>
<span class="email-val">${email}</span>
<span style=" height: 10px;
display: inline-block;
border-left: 2px solid #999;
margin: 0px 10px;"></span>
<span style=" color: #999;
font-weight: 300;">Phone: </span>
<span class="phone-val">${phone}</span>
</div>

<div class="about">
<span class="desc">
${career}</span>
</div>

</div>

<div style="margin-bottom: 40px; ">
<div style="letter-spacing: 2px;
color: #54AFE4;
font-weight: bold;
margin-bottom: 10px;
text-transform: uppercase; ">Education</div>
<div class="section__list">
  <div style="margin-bottom: 40px; ">
    <div style=" vertical-align: top;
display: inline-block; width: 60%;   ">
      <div style=" font-weight: bold; ">${collegeName}</div>
      <div class="addr">${course}</div>
      
    </div>
        </div>

</div>
<div style="margin-bottom: 40px; ">
<div style="letter-spacing: 2px;
color: #54AFE4;
font-weight: bold;
margin-bottom: 10px;
text-transform: uppercase; ">Projects</div> 
 <div class="section__list">
   <div style="margin-bottom: 40px; ">
     <div style=" font-weight: bold; ">${project}</div>
     <div class="text">${projectDes}</div>
   </div>
   

 </div>
</div>
<div style="margin-bottom: 40px; ">
 <div style="letter-spacing: 2px;
color: #54AFE4;
font-weight: bold;
margin-bottom: 10px;
text-transform: uppercase; ">Skills</div>
 <div class="skills">
   <div class="skills__item">
     <div style=" vertical-align: top;
display: inline-block; width: 60%;margin-bottom: 30px;   "><div style=" font-weight: bold; ">
${skills.split(",").join("<br />")}
       </div></div>
     
   </div>
   
 </div>
 
<div style="margin-bottom: 40px; ">
<div style="letter-spacing: 2px;
color: #54AFE4;
font-weight: bold;
margin-bottom: 10px;
text-transform: uppercase; ">
 Interests
 </div>
 <div class="section__list">
   <div >
   ${hobbies.split(",").join("<br />")}
    </div>
 </div>
</div>
</div>
</div>
</div>
</body>
</html>
  `;

export { PdfCode };
