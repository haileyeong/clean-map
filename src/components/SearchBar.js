import '../components/css/SearchBar.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function SearchBar() {
    return (
        <Box sx={{ flexGrow: 1 }} id="searchBar">
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <form>
                        <TextField
                            id="outlined-basic"
                            placeholder="위치를 입력하세요!"
                            variant="outlined"
                            name="keyword"
                            fullWidth // TextField를 전체 너비로 설정
                        />
                    </form>
                </Grid>
                <Grid item xs={2}>
                    <Button
                        id="button"
                        type="submit"
                        variant="contained"
                        color="primary">
                        검색
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchBar;
