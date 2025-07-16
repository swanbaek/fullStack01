// App00.js
import Comp1 from './example/JsxEx1'; //export default 로 내보낸 경우
//import Comp2 from './example/JsxEx2';//export 내보낸 경우 [x]
//export 'default' (imported as 'Comp2') was not found in './example/JsxEx2' (possible exports: Ex3, JsxEx2)
import * as Comp2 from './example/JsxEx2';
import { GetBrand, GetOS } from './example/JsxEx3';
//JsxEx4를 import하여 각 컴포넌트를 출력하기
import { GetLang as Lang, GetJob as Job } from './example/JsxEx4';
//별칭을 붙여 사용 가능
import MyPet from './example/JsxEx4';
import Anonymous from './example/JsxEx5';
import GetName from './example/JsxEx6';
function App() {
    return (
        <div className="container py-4">
            <h1 class="text-primary">Hi React App00.js</h1>
            <hr></hr>
            <Comp1></Comp1>
            <hr></hr>
            <Comp2.JsxEx2 />
            <br></br>
            <Comp2.Ex3 />
            <hr></hr>
            <div className="alert alert-info">
                <GetBrand />
                <GetOS />
                <Lang />
                <Job />
                <MyPet />
            </div>
            <hr></hr>
            <GetName />
            <Anonymous />
        </div>
    );
}
export default App;
