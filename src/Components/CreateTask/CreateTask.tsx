import React, {ChangeEvent, useState} from 'react';
import {CreateTaskComponent, TitleCreateTask} from "./CreateTask.elements";
import {Button, ButtonGroup, Input, InputControl, InputErrors, TextArea} from "../../GlobalStyles";
import {useActions} from "../../hook/useActions";
import {useTypedSelector} from "../../hook/useTypedSelector";

const CreateTask = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [text, setText] = useState<string>('');
    const {createTask, isVisibleState} = useActions();
    const {error} = useTypedSelector(state => state.task)
    const createTaskHandler = async () => {
        await createTask(email, username, text);
    }
    return (
        <CreateTaskComponent>
            <TitleCreateTask>Добавить задачу</TitleCreateTask>
            <InputControl>
                <Input value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder={'email'} type={'email'}/>
                {error!==null && error.email && <InputErrors> { error.email }  </InputErrors>}
            </InputControl>
            <InputControl>
                <Input value={username} onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} placeholder={'Имя'}/>
                {error!==null && error.username && <InputErrors> { error.username }  </InputErrors>}
            </InputControl>
            <InputControl>
                <TextArea  value={text} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} placeholder={'Текст задачи'}/>
                {error!==null && error.text && <InputErrors> { error.text }  </InputErrors>}
            </InputControl>
            <InputControl> <ButtonGroup>
                <Button type={"submit"} outlined onClick={() => isVisibleState(false)}>Отмена</Button>   <Button type={"submit"} onClick={createTaskHandler}>Добавить</Button>
            </ButtonGroup>
            </InputControl>

        </CreateTaskComponent>
    );
};

export default CreateTask;