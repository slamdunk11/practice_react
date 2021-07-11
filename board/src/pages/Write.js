import React from "react";
import { Grid, Button, Image, Text, Input } from "../elements/index";


const Write = (props) => {
    return(
        <React.Fragment>
            <Grid>
                <Input placeholder="제목을 입력하세요"/>
                <Input multilines placeholder="당신의 이야기를 적어보세요"/>
            </Grid>
            <Grid is_flex>
                <Grid width="auto">
                    <Button>나가기</Button>
                </Grid>
                <Grid width="auto">
                    <Button>임시저장</Button>
                    <Button>출간하기</Button>
                </Grid>
            </Grid>
        </React.Fragment>
        
    );
}

export default Write;