function iniciaModal(modalID){
    const modal= document.getElementById(modalID);
    if(modal){
        modal.classList.add('show-modal');
        modal.addEventListener('click', (e)=>{
            if (e.target.id == modalID || e.target.className == 'exit'){
                modal.classList.remove('show-modal')
                
            }
        })
    }
}

const foto= document.querySelector('.foto01');
foto.addEventListener('click',function(){
 iniciaModal('imgjs01')  
 })
   const foto2= document.querySelector('.foto02');
   foto2.addEventListener('click',function(){
   iniciaModal('imgjs02')  
 })
 const foto3= document.querySelector('.foto03');
   foto3.addEventListener('click',function(){
   iniciaModal('imgjs03')  
 })
const foto4= document.querySelector('.foto04');
   foto4.addEventListener('click',function(){
   iniciaModal('imgjs04')  
 })
 const foto5= document.querySelector('.foto05');
   foto5.addEventListener('click',function(){
   iniciaModal('imgjs05')  
 })
 const foto6= document.querySelector('.foto06');
   foto6.addEventListener('click',function(){
   iniciaModal('imgjs06')  
 })
 const foto7= document.querySelector('.foto07');
   foto7.addEventListener('click',function(){
   iniciaModal('imgjs07')  
 })
 const foto8= document.querySelector('.foto08');
   foto8.addEventListener('click',function(){
   iniciaModal('imgjs08')  
 })
 const foto9= document.querySelector('.foto09');
   foto9.addEventListener('click',function(){
   iniciaModal('imgjs09')  
 })
 const foto10= document.querySelector('.foto10');
 foto10.addEventListener('click',function(){
 iniciaModal('imgjs10')  
})
const foto11= document.querySelector('.foto11');
foto11.addEventListener('click',function(){
iniciaModal('imgjs11')  
})
const foto12= document.querySelector('.foto12');
foto12.addEventListener('click',function(){
iniciaModal('imgjs12')  
})
const foto13= document.querySelector('.foto13');
foto13.addEventListener('click',function(){
iniciaModal('imgjs13')  
})
const foto14= document.querySelector('.foto14');
foto14.addEventListener('click',function(){
iniciaModal('imgjs14')  
})
const foto15= document.querySelector('.foto15');
foto15.addEventListener('click',function(){
iniciaModal('imgjs15')  
})
const foto16= document.querySelector('.foto16');
foto16.addEventListener('click',function(){
iniciaModal('imgjs16')  
})
const foto17= document.querySelector('.foto17');
foto17.addEventListener('click',function(){
iniciaModal('imgjs17')  
})
const foto18= document.querySelector('.foto18');
foto18.addEventListener('click',function(){
iniciaModal('imgjs18')  
})
const foto19= document.querySelector('.foto19');
foto19.addEventListener('click',function(){
iniciaModal('imgjs19')  
})
const foto20= document.querySelector('.foto20');
foto20.addEventListener('click',function(){
iniciaModal('imgjs20')  
})
const foto21= document.querySelector('.foto21');
foto21.addEventListener('click',function(){
iniciaModal('imgjs21')  
})
const foto22= document.querySelector('.foto22');
foto22.addEventListener('click',function(){
iniciaModal('imgjs22')  
})
const foto23= document.querySelector('.foto23');
foto23.addEventListener('click',function(){
iniciaModal('imgjs23')  
})
const foto24= document.querySelector('.foto24');
foto24.addEventListener('click',function(){
iniciaModal('imgjs24')  
})
const foto25= document.querySelector('.foto25');
foto25.addEventListener('click',function(){
iniciaModal('imgjs25')  
})
const foto26= document.querySelector('.foto26');
foto26.addEventListener('click',function(){
iniciaModal('imgjs26')  
})
const foto27= document.querySelector('.foto27');
foto27.addEventListener('click',function(){
iniciaModal('imgjs27')  
})
const foto28= document.querySelector('.foto28');
foto28.addEventListener('click',function(){
iniciaModal('imgjs28')  
})
const foto29= document.querySelector('.foto29');
foto29.addEventListener('click',function(){
iniciaModal('imgjs29')  
})
const foto30= document.querySelector('.foto30');
foto30.addEventListener('click',function(){
iniciaModal('imgjs30')  
})

//--------- modal ilustração ------//

const ilustra01= document.querySelector('.ilust01');
ilustra01.addEventListener('click',function(){
iniciaModal('ilutjs01')  
})
const ilustra02= document.querySelector('.ilust02');
ilustra02.addEventListener('click',function(){
iniciaModal('ilutjs02')  
})
const ilustra03= document.querySelector('.ilust03');
ilustra03.addEventListener('click',function(){
iniciaModal('ilutjs03')  
})
const ilustra04= document.querySelector('.ilust04');
ilustra04.addEventListener('click',function(){
iniciaModal('ilutjs04')  
})
const ilustra05= document.querySelector('.ilust05');
ilustra05.addEventListener('click',function(){
iniciaModal('ilutjs05')  
})
const ilustra06= document.querySelector('.ilust06');
ilustra06.addEventListener('click',function(){
iniciaModal('ilutjs06')  
})
const ilustra07= document.querySelector('.ilust07');
ilustra07.addEventListener('click',function(){
iniciaModal('ilutjs07')  
})
const ilustra08= document.querySelector('.ilust08');
ilustra08.addEventListener('click',function(){
iniciaModal('ilutjs08')  
})
const ilustra09= document.querySelector('.ilust09');
ilustra09.addEventListener('click',function(){
iniciaModal('ilutjs09')  
})
const ilustra10= document.querySelector('.ilust10');
ilustra10.addEventListener('click',function(){
iniciaModal('ilutjs10')  
})

//--------- modal arte grafica ------//

const montag01= document.querySelector('.mont01');
montag01.addEventListener('click',function(){
iniciaModal('montjs01')  
})
const montag02= document.querySelector('.mont02');
montag02.addEventListener('click',function(){
iniciaModal('montjs02')  
})
const montag03= document.querySelector('.mont03');
montag03.addEventListener('click',function(){
iniciaModal('montjs03')  
})
const montag04= document.querySelector('.mont04');
montag04.addEventListener('click',function(){
iniciaModal('montjs04')  
})
const montag05= document.querySelector('.mont05');
montag05.addEventListener('click',function(){
iniciaModal('montjs05')  
})
const montag06= document.querySelector('.mont06');
montag06.addEventListener('click',function(){
iniciaModal('montjs06')  
})
const montag07= document.querySelector('.mont07');
montag07.addEventListener('click',function(){
iniciaModal('montjs07')  
})
const montag08= document.querySelector('.mont08');
montag08.addEventListener('click',function(){
iniciaModal('montjs08')  
})
const montag09= document.querySelector('.mont09');
montag09.addEventListener('click',function(){
iniciaModal('montjs09')  
})
const montag10= document.querySelector('.mont10');
montag10.addEventListener('click',function(){
iniciaModal('montjs10')  
})

//--------- modal Arte Publicitária ------//

const artepb01= document.querySelector('.arte01');
artepb01.addEventListener('click',function(){
iniciaModal('artjs01')  
})
const artepb02= document.querySelector('.arte02');
artepb02.addEventListener('click',function(){
iniciaModal('artjs02')  
})
const artepb03= document.querySelector('.arte03');
artepb03.addEventListener('click',function(){
iniciaModal('artjs03')  
})
const artepb04= document.querySelector('.arte04');
artepb04.addEventListener('click',function(){
iniciaModal('artjs04')  
})
const artepb05= document.querySelector('.arte05');
artepb05.addEventListener('click',function(){
iniciaModal('artjs05')  
})
const artepb06= document.querySelector('.arte06');
artepb06.addEventListener('click',function(){
iniciaModal('artjs06')  
})
const artepb07= document.querySelector('.arte07');
artepb07.addEventListener('click',function(){
iniciaModal('artjs07')  
})
const artepb08= document.querySelector('.arte08');
artepb08.addEventListener('click',function(){
iniciaModal('artjs08')  
})
const artepb09= document.querySelector('.arte09');
artepb09.addEventListener('click',function(){
iniciaModal('artjs09')  
})
const artepb10= document.querySelector('.arte10');
artepb10.addEventListener('click',function(){
iniciaModal('artjs10')  
})