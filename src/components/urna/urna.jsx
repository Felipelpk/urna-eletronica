import { Grid } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { valueContext } from "../../contexts/valueContext";
import backendApi from "../../services/backendApi";
import Keyboard from "./keyboard";
import Screens from "./screens";

export default function Urna(){

    const { _value, _setValue } = useContext(valueContext);
    const [ _screen, _setScreen ] = useState(1);
    const [ _data, _setData ] = useState();
    const [ _reportData, _setReportData ] = useState();
    const [ _error, _setError ] = useState('');

    const _removeLastCharacter = () => {
        if(_value === '') return;
        _setValue(_value.slice(0,-1));
    };

    const _handleWhiteVote = async (screen) => {
        if(screen === 2){
            _setData((prevState) => ({ ...prevState, 
                snack: ''
            }));
            _setValue('');
            _setError('');
            _setScreen(prevState => prevState + 1);
            
        }

        if(screen === 3){
            _setData((prevState) => ({ ...prevState, 
                drink: ''
            }));
            _setValue('');
            _setError('');
            _setScreen(prevState => prevState + 1);
        }
    }

    const _handleConfirm = async (screen) => {
        if(_value === "0000"){
            await backendApi.get('/resume')
            .then(response => {
                _setReportData(response.data);
                _setScreen(0);
            })
        }

        if(screen === 1 && _value !== "0000"){
            await backendApi.get(`/voters?id=${_value}`)
                .then(response => {
                    if(response.data[0].haveVoted === "true"){
                        _setError('Este eleitor já votou.');
                    } else{
                        _setData({
                            voterName: response.data[0].name,
                            voterId: response.data[0].id
                        });
                        _setScreen(prevState => prevState + 1);
                        _setValue('');
                        _setError('');
                    }
                }).catch(error => {
                    _setError(error.response.data.message);
                })
        }

        if(screen === 2){
            await backendApi.get(`/snacks?id=${_value}`)
            .then(response => {
                _setData((prevState) => ({ ...prevState, 
                    snack: response.data[0].name
                }))
                _setScreen(prevState => prevState + 1);
                _setValue('');
                _setError('');
            }).catch(error => {
                _setError(error.response.data.message);
            })
        }

        if(screen === 3){
            await backendApi.get(`/drinks?id=${_value}`)
            .then(response => {
                _setData((prevState) => ({ ...prevState, 
                    drink: response.data[0].name
                }));
                _setScreen(prevState => prevState + 1);
                _setValue('');
                _setError('');
            }).catch(error => {
                _setError(error.response.data.message);
            })
        }
        
    };

    useEffect(() => {
        if(_screen === 4){
            backendApi.post('/voutes', _data)
            .then(response => {
                _setData(null);
                setTimeout(() => _setScreen(1), 3000);
            })
        }
    }, [_screen, _data])

    console.log(_error, "<- Error");
    console.log(_data, "<- Eleitor ");

    return (
        <Grid
            width="1000px" 
            bgColor="#2d3748"
            height="500px"
            borderRadius="8px"
            gridTemplateColumns="1.5fr 1fr"
            gap="2rem"
            padding="2rem"
        >   
            <Screens
                data={_data}
                screen={_screen}
                error={_error}
                reportData={_reportData}
            />
            <Keyboard
                screen={_screen}
                setValue={_setValue}
                removeLastCharacter={_removeLastCharacter}
                setScreen={_setScreen}
                handleConfirm={_handleConfirm}
                handleWhiteVote={_handleWhiteVote}
            />
        </Grid>
    )
}