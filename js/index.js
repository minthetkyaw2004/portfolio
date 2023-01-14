// skills function start

function preview(item, index, active, dark=false){
    let data = "";
    
    item.details.map((item,index) => {

        data += `
        <div class="flex justify-evenly align-middle md:py-2 lg:py-3 maincards" key="${index}">
            <div class="w-full md:w-3/5 bg-neutral-200 bg-800 rounded-full flex align-middle">
                <div class="bg-neutral-400 bg-600 text-end rounded-full pr-1 md:pr-5 text-white" style="width: ${item.value}%;">${item.value}%</div>
            </div>
            <div class="w-full md:w-1/5 text-md md:text-lg text-center">${ item.name }</div>
        </div>`;

    });

    var content = `
    <div class="w-full md:w-full md:mx-auto lg:w-full flex md:flex-wrap lg:flex-nowrap justify-center align-middle md:my-1 lg:my-3 preview ${active ? "active" : ""}" key="${index}">
        <div class="rounded-xl w-full lg:w-full preview-row flex-col justify-between align-middle">
            <h1 class="w-fit text-2xl text-center md:pb-8 lg:text-xl font-serif md:font-extrabold m-auto mb-8 previewlabel">${ item.name }</h1>
            <div class="w-48 md:w-60 lg:w-72 h-48 md:h-60 lg:h-72 rounded-full flex justify-center align-middle m-auto bg-neutral-200 bg-800 preview-circle">
                <div class="w-3/4 h-3/4 rounded-full flex justify-center align-middle m-auto" style="background: conic-gradient(${dark ? "grey" : "lightgrey"} 0 ${ item.value }%, ${dark ? "lightgrey" : "grey"} ${ item.value }%);">
                    <div class="w-4/5 h-4/5 rounded-full flex justify-center align-middle m-auto bg-neutral-200 bg-800">
                        <p class="text-2xl md:text-5xl m-auto text-neutral-900 text-100 preview-text">${ item.value }%</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="rounded-xl w-1/2 flex-col md:py-10 lg:py-5 preview-detail">
            ${ data } 
        </div>
    </div>
    `;
    return content;
}

function content(dark){
    skills.map((item,index) => {
        if(index === 0){
            document.getElementById("pieplace").innerHTML += preview(item, index, false, dark);
        }else{
            document.getElementById("sideplace").innerHTML += preview(item, index, true, dark);
        }
    });
}

function modify(item, key){
    document.getElementById('sideplace').innerHTML = "";
    document.getElementById('pieplace').innerHTML = "";
    for(let index=0; index < skills.length; index++){
        console.log(key, index, skills[index]);
        key == index ? document.getElementById("pieplace").innerHTML += preview(skills[index], index, false) : document.getElementById("sideplace").innerHTML += preview(skills[index], index, true);
    }
}

content(true);

setInterval(() => {
    $('.preview').click(function(){
        
        let key = $(this).attr('key');
        modify($(this), key);
        $(this).removeClass('active');
    
    });
}, 1000);

// skills function end 

// start experiences function

experiences.map((item,index) => {

    let card = "";

    item.cards.map((item,index) => {
        let cards = `
        <div class="w-4/5 mb-3 md:mb-0 md:w-2/5 md:m-3 lg:w-1/5 h-64 rounded-xl overflow-hidden border-neutral-300 border-700 border-2 bg-white cards" data-aos="zoom-in">
            <img src="${ item.image }" alt="img of card ${index + 1}" class="h-2/3 block m-auto" />
            <div class="h-1/3 p-2 bg-neutral-200 bg-800 px-4">
                <h2 class="text-xl font-bold my-1">${item.heading}</h2>
                <p class="text-lg text-neutral-800 text-200">${item.summary}</p>
            </div>
        </div>
        `;
        card += cards;
    })

    
    let frame = `
    <div class="w-full flex-col flex-wrap justify-around md:my-1 lg:my-3" key="${index}">
        <h1 class="w-fit m-auto lg:ml-36 md:pt-2 lg:py-2 px-2 md:px-5 bg-neutral-300 bg-700 text-2xl font-semibold rounded-lg" data-aos="fade-in">${item.topic}</h1>
        <div class="flex w-full flex-wrap justify-around align-middle py-10 lg:py-5">
            ${ card }
        </div>
    </div>
    `;
    
    document.getElementById('experienceplace').innerHTML += frame;
})

// end experiences function
let count = 0;
$('#checkbox').click(function(){
    document.body.classList.toggle('dark');
    document.getElementById("pieplace").innerHTML = "";
    document.getElementById("sideplace").innerHTML = "";
    count % 2 === 1 ? content(true) : content(false);
    count++;
});

AOS.init();