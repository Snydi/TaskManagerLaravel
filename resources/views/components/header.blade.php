<nav class="header">
    <div class="header__wrapper">
        <div class="header__content">
            <div class="header__left">
            <a class="header__link" href ="/">Home</a>
            </div>
            @if (Auth::check())
                <div class="header__auth">
                    <a class="header__link" href ="/tasks">Tasks</a>
                    <a class="header__link" href ="/logout">Logout</a>
                </div>
            @else
                <div class="header__auth">
                    <a class="header__link" href ="/register">Register</a>
                    <a class="header__link" href ="/login">Login</a>
                </div>
            @endif
        </div>
    </div>
</nav>
