<script>
    import { user } from '../../state/user';

    var username;
    var password;

    function login()
    {
        user.auth(username, password, ({ error }) => error && alert(error));
    }

    function signup()
    {
        user.create(username, password, ({ error }) =>
        {
            if(error)
            {
                alert(err);
            }
            else
            {
                login();
            }
        });
    }
</script>

<label for="username">Username</label>
<input name="username" bind:value={username} minlength="4" maxlength="16" />

<label for="password">Password</label>
<input name="password" bind:value={password} type="password" />

<button class="login" on:click={login}>Login</button>
<button class="login"  on:click={signup}>Sign Up</button>
  
