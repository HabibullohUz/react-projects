2 - mavzu
RENDER
render(ekrangaChiqadiganKod, root)
Yozilgan kodni React ekranga chiqarishi uchun ReactDOM.render()
funksiyasidan foydalanamiz

render - inglizchadan, "ko'rsatish" ma'nosini anglatadi. Lekin qayerda
ko'rsatish kerak? React projectimizda public nomli papka bor.
Ana usha papkani ichida index.html mavjud.Ushani ichidagi 'root' idli
    < div > ekranga chiqadi.

        Topshiriq: App o'rniga <h1> yozing

==========================================
JSX
JSX - JavaScript XML
JavaScript kodining ichida HTML teglar yozish imkoniyati

const element = <h1>Hello world</h1>;
https://reactjs.org/docs/introducing-jsx.html

JSX fon ortida biz bilgan JS ga avtomatik tarzda o'tadi

Topshiriq: G2 kuchaydi paragrafini ekranga chiqaring

JSX ning umumiy qoidalari:
1. JSX da {} ichida JS ifodalarni yozishimiz mumkin. Ifoda bu matematik ifoda,
o'zgaruvchiga murojaat yoki har qanday JS ifodasi bo'lishi mumkin
Misol:
const myelement = <h1>React JSX bilan {5 + 5} marotaba qulayroq</h1>;
Topshiriq: promptda ism va familiya olib ekranga chiqarish


2. Ko'p qatorli JSX ni () orasiga qo'yish kerak
const myelement = (
  <ul>
    <li>Banan</li>
    <li>Olma</li>
    <li>Nok</li>
  </ul>
);

3. JSX dagi HTML kod BITTA yuqori darajadagi elementga o'ralgan bo'lishi kerak.
const myelement = (
  <div>
    <p>Birinchi paragraph</p>
    <p>Ikkinchi paragraph</p>
  </div>
);

4. Yuqori darajadagi element <div> bo'lishi shart emas. <></> quysa buladi
const myelement = (
  <>
    <p>Birinchi paragraph</p>
    <p>Ikkinchi paragraph</p>
  </>
);
Topshiriq: ism familiya va kun tartibini ekranga chiqaring


5. JSX dagi HTML elementlar yoplishi majburiy
const myelement = <input type="text" />;
const myelement = <input type="text">; ==> hato

6. class so'zi JS da kalit so'z bo'lgani bois JSX dagi HTML elementlarga
class ni className kalit so'zi bilan ifodalaymiz
Misol:
import './mystyle.css';
const myelement = <h1 className="myclass">Hello World</h1>;
Topshiriq: Gorizontal va vertikal markazlashgan dumoloq yasang

7. JSX da kommentariy {/* */} yordamida yoziladi

=====================================================

COMPONENT
Component - bu HTML elementlarini (JSX) qaytaruvchi funksiyadir.

Component yaratish quyidagi qoidalarga asosan bo'ladi:
1. Component nomi katta harfdan boshlanishi majburiy
2. Component ikki hil yo'l bilan hosil qilinishi mumkin:
  a. Class yordamida
  class Salom extends React.Component {
    render() {
      return <h2>Salom, men Eshmatman!</h2>;
    }
  }
  b. Function yordamida (soddaroq va afzal ko'rilgan yo'l)
  function Salom() {
    return <h2>Salom, men Eshmatman!</h2>;
  }

3. Componentga murojaat <ComponentNomi /> bilan buladi
ReactDOM.render(
  <Salom />,
  document.getElementById('root')
);

4. Componentga boshqa componentni ichida murojaat qilsa buladi
function Mashina() {
  return <h2>Toyota Camry</h2>;
}

function Garaj() {
  return (
    <>
      <h1>Garajimda nima mashina bor?</h1>
      <Mashina />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

5. Componentlar boshqa faylda yozilishi tafsiya etiladi va ularni
export/import yordamida ishlatamiz
