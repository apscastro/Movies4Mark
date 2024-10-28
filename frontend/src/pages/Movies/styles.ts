import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
export const styles={
    parent:{
        p: 2, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2 ,
        fontFamily: 'Roboto, sans-serif',
        fontWeight: 300
    },
    
    box1:{
        display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'left', 
        p: { xs: 1, sm: 2, md: 3 },
        textAlign: 'left',
        fontWeight: 300,
        flexDirection:'row'
    },
    box2:{
        display: 'flex', 
        justifyContent: 'left', 
        alignItems: 'left', 
        flexDirection:'row'
    },

    box3:{
        overflowX: 'auto',
        p: { xs: 1, sm: 2 },
        width: '100%'
    },
    
    typo:{
        color:"#386071",
        fontSize:"24px"
    },

    table:{
        minWidth: 300,
    },

    tableHead:{
        borderColor:"#0B749B",
        mb:"-10px"
    },

    headCell:{
        color:"#0B749B",
        fontSize:"10px"
    },

    cell:{
        color : "#536B7A",
        fontWeight: 400,
        fontSize:'16px'
    },

    button:{
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: "1px solid #78849E66",
        borderRadius: "20px",
        opacity: 1,
        color: "#78849E",
        pr:"12px",
        pl:"12px",
        pt:"8px",
        pb:"8px",
        mr:"10px"
    },

    activeButton:{
        background: "#00BAFF 0% 0% no-repeat padding-box",
        border: "1px solid #78849E66",
        borderRadius: "20px",
        opacity: 1,
        color: "#000000",
        pr:"12px",
        pl:"12px",
        pt:"8px",
        pb:"8px",
        mr:"10px"
    }
}