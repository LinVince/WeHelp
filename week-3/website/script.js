async function displaydata(){
  var requestURL = 'https://padax.github.io/taipei-day-trip-resources/taipei-attractions-assignment.json';
  const getData = await fetch(requestURL).then(function(response){
    return response.json();
    }).then(function(data){
      return data; 
  });
   return getData;
}

displaydata().then((data) => {
    var data_array = data.result.results;
    var stitles = [];
	var photos = [];
    for(var i = 0; i < data_array.length; i++){
		stitles.push(data_array[i].stitle);
		photo_url = data_array[i].file.split('https');
		photos.push('https' + photo_url[1])};
    
    
    const presentation1 = document.createElement('div');
    const presentation2 = document.createElement('div');
    presentation_ = [presentation1,presentation2];
    for (let i = 0; i < presentation_.length; i++){
      presentation_[i].setAttribute('id','name');
    }
    //presentation1.setAttribute('id','name');
    //presentation2.setAttribute('id','name');
    const preimg1 = document.createElement('img');
    const preimg2 = document.createElement('img');
    preimg_ = [preimg1,preimg2];
    for (let i = 0; i < preimg_.length; i++){
      preimg_[i].setAttribute('src',photos[i]);
      preimg_[i].setAttribute('width','80px');
      preimg_[i].setAttribute('height','50px');
    };
    /*preimg1.setAttribute('src',photos[0]);
    preimg1.setAttribute('width','80px');
    preimg1.setAttribute('height','50px');
    
    preimg2.setAttribute('src',photos[1]);
    preimg2.setAttribute('width','80px');
    preimg2.setAttribute('height','50px');*/
    const pretitle1 = document.createElement('span');
    const pretitle2 = document.createElement('span');
    const galleryName = document.querySelector('.gallery-name');
    presentation_ = [presentation1,presentation2];
    pretitle_ = [pretitle1,pretitle2];
    for (let i = 0; i < pretitle_.length; i++){
      pretitle_[i].innerText = stitles[i]
    };
    /*pretitle1.innerText = stitles[0];
    pretitle2.innerText = stitles[1];*/
    for (let i = 0; i < pretitle_.length; i++){
      galleryName.appendChild(presentation_[i]);
      presentation_[i].appendChild(preimg_[i]);
      presentation_[i].appendChild(pretitle_[i]);
    };
    /*galleryName.appendChild(presentation1);
    galleryName.appendChild(presentation2);
    presentation1.appendChild(preimg1);
    presentation2.appendChild(preimg2);
    presentation1.appendChild(pretitle1);
    presentation2.appendChild(pretitle2);*/
    const showcase = document.querySelector('.showcase');
    for (let i = 0; i < 4; i++){
      var newf = document.createElement('div');
      newf.setAttribute('class','photo');
      showcase.appendChild(newf);
      var img = document.createElement('img');
      img.setAttribute('src',photos[i+2]);
      img.setAttribute('width','290px');
      img.setAttribute('height','200px');
      newf.appendChild(img);
      var newt = document.createElement('div');
      newt.setAttribute('class','desc');
      newt.innerText = stitles[i+2];
      newf.appendChild(newt);
      
    };
    /*f1 = document.createElement('div');
    f2 = document.createElement('div');
    f3 = document.createElement('div');
    f4 = document.createElement('div');
    f1.setAttribute('class','photo');    
    f2.setAttribute('class','photo');    
    f3.setAttribute('class','photo');    
    f4.setAttribute('class','photo'); */
  
    /*const t1 = document.createElement('span');
    t1.innerText = stitles[2];
    const t2 = document.createElement('span');
    t2.innerText = stitles[3];
    const t3 = document.createElement('span');
    t3.innerText = stitles[4];
    const t4 = document.createElement('span');
    t4.innerText = stitles[5];
    const img1 = document.createElement('img');
    img1.setAttribute('src',photos[2]);
    img1.setAttribute('width','290px');
    img1.setAttribute('height','200px');
    const img2 = document.createElement('img');
    img2.setAttribute('src',photos[3]);
    img2.setAttribute('width','290px');
    img2.setAttribute('height','200px');
    const img3 = document.createElement('img');
    img3.setAttribute('src',photos[4]);
    img3.setAttribute('width','290px');
    img3.setAttribute('height','200px');
    const img4 = document.createElement('img');
    img4.setAttribute('src',photos[5]);
    img4.setAttribute('width','290px');
    img4.setAttribute('height','200px');
    
    showcase.appendChild(f1);
    showcase.appendChild(f2);
    showcase.appendChild(f3);
    showcase.appendChild(f4);
    
    f1.appendChild(img1);
    f2.appendChild(img2);
    f3.appendChild(img3);
    f4.appendChild(img4);
    
    f1.appendChild(t1);
    f2.appendChild(t2);
    f3.appendChild(t3);
    f4.appendChild(t4);*/
  
    const showcase2 = document.querySelectorAll('.showcase')[1];
    for (let i = 0; i < 4; i++){
      var newf = document.createElement('div');
      newf.setAttribute('class','photo');
      showcase2.appendChild(newf);
      var img = document.createElement('img');
      img.setAttribute('src',photos[i+6]);
      img.setAttribute('width','290px');
      img.setAttribute('height','200px');
      newf.appendChild(img);
      var newt = document.createElement('div');
      newt.setAttribute('class','desc');
      newt.innerText = stitles[i+6];
      newf.appendChild(newt);
    };
  
    /*const f5 = document.createElement('div');
    f5.setAttribute('class','photo');
    const f6 = document.createElement('div');
    f6.setAttribute('class','photo');
    const f7 = document.createElement('div');
    f7.setAttribute('class','photo');
    const f8 = document.createElement('div');
    f8.setAttribute('class','photo');
    const t5 = document.createElement('span');
    t5.innerText = stitles[6];
    const t6 = document.createElement('span');
    t6.innerText = stitles[7];
    const t7 = document.createElement('span');
    t7.innerText = stitles[8];
    const t8 = document.createElement('span');
    t8.innerText = stitles[9];
    const img5 = document.createElement('img');
    img5.setAttribute('src',photos[6]);
    img5.setAttribute('width','290px');
    img5.setAttribute('height','200px');
    const img6 = document.createElement('img');
    img6.setAttribute('src',photos[7]);
    img6.setAttribute('width','290px');
    img6.setAttribute('height','200px');
    const img7 = document.createElement('img');
    img7.setAttribute('src',photos[8]);
    img7.setAttribute('width','290px');
    img7.setAttribute('height','200px');
    const img8 = document.createElement('img');
    img8.setAttribute('src',photos[9]);
    img8.setAttribute('width','290px');
    img8.setAttribute('height','200px');
    const showcasee = document.querySelector('.showcasee');
    showcasee.appendChild(f5);
    showcasee.appendChild(f6);
    showcasee.appendChild(f7);
    showcasee.appendChild(f8);
    f5.appendChild(img5);
    f6.appendChild(img6);
    f7.appendChild(img7);
    f8.appendChild(img8);
    
    f5.appendChild(t5);
    f6.appendChild(t6);
    f7.appendChild(t7);
    f8.appendChild(t8);*/
    const showcase3 = document.querySelectorAll('.showcase')[2];
    for (let i = 0; i < 4; i++){
      var newf = document.createElement('div');
      newf.setAttribute('class','photo');
      showcase3.appendChild(newf);
      var img = document.createElement('img');
      img.setAttribute('src',photos[i+10]);
      img.setAttribute('width','290px');
      img.setAttribute('height','200px');
      newf.appendChild(img);
      var newt = document.createElement('div');
      newt.setAttribute('class','desc');
      newt.innerText = stitles[i+10];
      newf.appendChild(newt);
      showcase3.style.display = "none";
    };
  
  
    const showcase4 = document.querySelectorAll('.showcase')[3];
    for (let i = 0; i < 4; i++){
      var newf = document.createElement('div');
      newf.setAttribute('class','photo');
      showcase4.appendChild(newf);
      var img = document.createElement('img');
      img.setAttribute('src',photos[i+14]);
      img.setAttribute('width','290px');
      img.setAttribute('height','200px');
      newf.appendChild(img);
      var newt = document.createElement('div');
      newt.setAttribute('class','desc');
      newt.innerText = stitles[i+14];
      newf.appendChild(newt);
      showcase4.style.display = "none";
    };      
});
function load(){
      let showcase3 = document.querySelectorAll('.showcase')[2];
      let showcase4 = document.querySelectorAll('.showcase')[3];
      showcase3.style.display = "flex";
      showcase4.style.display = "flex";
      let btn = document.querySelector('button');
      btn.style.display = "none";
      }    

