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
    presentation1.setAttribute('id','name');
    const presentation2 = document.createElement('div');
    presentation2.setAttribute('id','name');
    const preimg1 = document.createElement('img');
    preimg1.setAttribute('src',photos[0]);
    preimg1.setAttribute('width','80px');
    preimg1.setAttribute('height','50px');
    const preimg2 = document.createElement('img');
    preimg2.setAttribute('src',photos[1]);
    preimg2.setAttribute('width','80px');
    preimg2.setAttribute('height','50px');
    const pretitle1 = document.createElement('span');
    pretitle1.innerText = stitles[0];
    const pretitle2 = document.createElement('span');
    pretitle2.innerText = stitles[1];
    const galleryName = document.querySelector('.gallery-name');
    galleryName.appendChild(presentation1);
    galleryName.appendChild(presentation2);
    presentation1.appendChild(preimg1);
    presentation2.appendChild(preimg2);
    presentation1.appendChild(pretitle1);
    presentation2.appendChild(pretitle2);
  
    const f1 = document.createElement('div');
    f1.setAttribute('class','photo');
    const f2 = document.createElement('div');
    f2.setAttribute('class','photo');
    const f3 = document.createElement('div');
    f3.setAttribute('class','photo');
    const f4 = document.createElement('div');
    f4.setAttribute('class','photo');
    const t1 = document.createElement('span');
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
    const showcase = document.querySelector('.showcase');
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
    f4.appendChild(t4);
    
    const f5 = document.createElement('div');
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
    f8.appendChild(t8);
   
    
});
