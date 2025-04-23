import React, { useState } from 'react'
import axios from 'axios'


export default function App() {

    const [stud, setstud] = useState([]);

    const se = (event) => {

        let first_element = document.getElementById('first_element');
        first_element.style.display = 'none';

        let sec_element = document.getElementById('sec_element');
        sec_element.style.display = 'block';

        event.preventDefault();
        // axios.post('https://sample-psi-six.vercel.app/ans/', { array : array }) 
        // axios.post('https://sample-psi-six.vercel.app/ans/' ) 
        // axios.post('http://localhost:800/ans/', { array : array }) 
        axios.post('https://sample-psi-six.vercel.app/ans/', { array : array })
            .then(res => {
                // console.log(res.data.array); 
                // setstud(res.data.array);
                setstud(res.data);
                // av('/ans');
            })
            .catch(err => console.log(err));
    }


    let element_display = {
        display: 'none'
    }



    let array = [[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0]]



    const demo_array = {
        1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: "", 19: "", 20: "", 21: "", 22: "", 23: "", 24: "", 25: "", 26: "", 27: "", 28: "", 29: "", 30: "", 31: "", 32: "", 33: "", 34: "", 35: "", 36: "", 37: "", 38: "", 39: "", 40: "", 41: "", 42: "", 43: "", 44: "", 45: "", 46: "", 47: "", 48: "", 49: "", 50: "", 51: "", 52: "", 53: "", 54: "", 55: "", 56: "", 57: "", 58: "", 59: "", 60: "", 61: "", 62: "", 63: "", 64: "", 65: "", 66: "", 67: "", 68: "", 69: "", 70: "", 71: "", 72: "", 73: "", 74: "", 75: "", 76: "", 77: "", 78: "", 79: "", 80: "", 81: ""
    }

    const [array_element, setarray_element] = useState(demo_array);

    const cs = (event) => {
        const name = event.target.name
        const value = event.target.value
        setarray_element((prev) => {
            return { ...prev, [name]: value }
        })
    }


    const solve = () => {
        let i = 1;
        for (let w = 0; w < 9; w++) {
            for (let j = 0; j < 9; j++) {
                if (array_element[i] === "") {
                    array[w][j] = 0;
                }
                else {
                    array[w][j] = Number(array_element[i]);
                }
                i++
            }
        }
    }

    const new_solve = () => {
        let first_element = document.getElementById('first_element');
        first_element.style.display = 'block';

        let sec_element = document.getElementById('sec_element');
        sec_element.style.display = 'none';
    }




    return (
        <>
            <div className='container'>
                <h1 id='heading'>SUDUKO SOLVER </h1>
                <div id='first_element'>
                    <h1>Enter The Numbers :</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td ><input type="text" name='1' onChange={cs} /></td>
                                <td><input type="text" name='2' onChange={cs} /></td>
                                <td className='j'><input type="text" name='3' onChange={cs} /></td>
                                <td><input type="text" name='4' onChange={cs} /></td>
                                <td><input type="text" name='5' onChange={cs} /></td>
                                <td className='j'><input type="text" name='6' onChange={cs} /></td>
                                <td><input type="text" name='7' onChange={cs} /></td>
                                <td><input type="text" name='8' onChange={cs} /></td>
                                <td><input type="text" name='9' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='10' onChange={cs} /></td>
                                <td><input type="text" name='11' onChange={cs} /></td>
                                <td><input type="text" name='12' onChange={cs} /></td>
                                <td><input type="text" name='13' onChange={cs} /></td>
                                <td><input type="text" name='14' onChange={cs} /></td>
                                <td><input type="text" name='15' onChange={cs} /></td>
                                <td><input type="text" name='16' onChange={cs} /></td>
                                <td><input type="text" name='17' onChange={cs} /></td>
                                <td><input type="text" name='18' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='19' onChange={cs} /></td>
                                <td><input type="text" name='20' onChange={cs} /></td>
                                <td><input type="text" name='21' onChange={cs} /></td>
                                <td><input type="text" name='22' onChange={cs} /></td>
                                <td><input type="text" name='23' onChange={cs} /></td>
                                <td><input type="text" name='24' onChange={cs} /></td>
                                <td><input type="text" name='25' onChange={cs} /></td>
                                <td><input type="text" name='26' onChange={cs} /></td>
                                <td><input type="text" name='27' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='28' onChange={cs} /></td>
                                <td><input type="text" name='29' onChange={cs} /></td>
                                <td><input type="text" name='30' onChange={cs} /></td>
                                <td><input type="text" name='31' onChange={cs} /></td>
                                <td><input type="text" name='32' onChange={cs} /></td>
                                <td><input type="text" name='33' onChange={cs} /></td>
                                <td><input type="text" name='34' onChange={cs} /></td>
                                <td><input type="text" name='35' onChange={cs} /></td>
                                <td><input type="text" name='36' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='37' onChange={cs} /></td>
                                <td><input type="text" name='38' onChange={cs} /></td>
                                <td><input type="text" name='39' onChange={cs} /></td>
                                <td><input type="text" name='40' onChange={cs} /></td>
                                <td><input type="text" name='41' onChange={cs} /></td>
                                <td><input type="text" name='42' onChange={cs} /></td>
                                <td><input type="text" name='43' onChange={cs} /></td>
                                <td><input type="text" name='44' onChange={cs} /></td>
                                <td><input type="text" name='45' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='46' onChange={cs} /></td>
                                <td><input type="text" name='47' onChange={cs} /></td>
                                <td><input type="text" name='48' onChange={cs} /></td>
                                <td><input type="text" name='49' onChange={cs} /></td>
                                <td><input type="text" name='50' onChange={cs} /></td>
                                <td><input type="text" name='51' onChange={cs} /></td>
                                <td><input type="text" name='52' onChange={cs} /></td>
                                <td><input type="text" name='53' onChange={cs} /></td>
                                <td><input type="text" name='54' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='55' onChange={cs} /></td>
                                <td><input type="text" name='56' onChange={cs} /></td>
                                <td><input type="text" name='57' onChange={cs} /></td>
                                <td><input type="text" name='58' onChange={cs} /></td>
                                <td><input type="text" name='59' onChange={cs} /></td>
                                <td><input type="text" name='60' onChange={cs} /></td>
                                <td><input type="text" name='61' onChange={cs} /></td>
                                <td><input type="text" name='62' onChange={cs} /></td>
                                <td><input type="text" name='63' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='64' onChange={cs} /></td>
                                <td><input type="text" name='65' onChange={cs} /></td>
                                <td><input type="text" name='66' onChange={cs} /></td>
                                <td><input type="text" name='67' onChange={cs} /></td>
                                <td><input type="text" name='68' onChange={cs} /></td>
                                <td><input type="text" name='69' onChange={cs} /></td>
                                <td><input type="text" name='70' onChange={cs} /></td>
                                <td><input type="text" name='71' onChange={cs} /></td>
                                <td><input type="text" name='72' onChange={cs} /></td>
                            </tr>
                            <tr>
                                <td><input type="text" name='73' onChange={cs} /></td>
                                <td><input type="text" name='74' onChange={cs} /></td>
                                <td><input type="text" name='75' onChange={cs} /></td>
                                <td><input type="text" name='76' onChange={cs} /></td>
                                <td><input type="text" name='77' onChange={cs} /></td>
                                <td><input type="text" name='78' onChange={cs} /></td>
                                <td><input type="text" name='79' onChange={cs} /></td>
                                <td><input type="text" name='80' onChange={cs} /></td>
                                <td><input type="text" name='81' onChange={cs} /></td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={solve} className='button1' >Save Suduko</button>
                    <button onClick={se} className='button1' >Solved Suduko</button>
                </div>




                <div style={element_display} id='sec_element'>
                    <h1>Solved Suduko is : </h1>
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            {
                                stud.map((data, i) =>
                                    <tr>
                                        <td key={0}>{data[0]}</td>
                                        <td key={1}>{data[1]}</td>
                                        <td key={2}>{data[2]}</td>
                                        <td key={3}>{data[3]}</td>
                                        <td key={4}>{data[4]}</td>
                                        <td key={5}>{data[5]}</td>
                                        <td key={7}>{data[6]}</td>
                                        <td key={6}>{data[7]}</td>
                                        <td key={8}>{data[8]}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                    <button onClick={new_solve} id='button' >New Suduko</button>
                </div>


            </div>
        </>
    )
}
