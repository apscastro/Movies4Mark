import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

export const styles={
    box1:{
        display:"flex",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'white',
        boxShadow: 24,
        pt:"30px",
        pl:"58px",
        pb:"17px",
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 300,
        flexDirection: 'row', 
    },
    title:{
        fontWeight:"300",
        fontSize:"32px",
        color:"#164E78",
    },

    detailTitle:{
        color:"#78849EB9",
        fontWeight:400,
        fontSize:"14px"
    },
    detailText:{
        color:"#78849E",
        fontWeight:500,
        fontSize:"16px"
    },

    detailCredits:{
        color:"#00BAFF",
        fontWeight:500,
        fontSize:"16px"
    },

    button:{
        minWidth:"32px",
        height:"32px", 
        color:"#718FA2",
        mr:"32px"
    },

}