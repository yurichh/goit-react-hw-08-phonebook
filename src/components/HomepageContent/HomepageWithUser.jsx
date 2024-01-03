import { Button } from '@mui/material';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

const HomepageWithUser = () => {
  return (
    <div className="">
      <Button type="submit" variant="outlined" size="medium">
        <NavLink to="/contacts">Go to your contacts</NavLink>
      </Button>
    </div>
  );
};

export default HomepageWithUser;
