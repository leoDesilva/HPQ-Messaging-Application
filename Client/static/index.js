greeting = `
 .................................................................................................
 :'##::: ##:'########:'########:'##:::::'##::'#######::'########::'##:::'##:'########:'########:::
 : ###:: ##: ##.....::... ##..:: ##:'##: ##:'##.... ##: ##.... ##: ##::'##:: ##.....:: ##.... ##::
 : ####: ##: ##:::::::::: ##:::: ##: ##: ##: ##:::: ##: ##:::: ##: ##:'##::: ##::::::: ##:::: ##::
 : ## ## ##: ######:::::: ##:::: ##: ##: ##: ##:::: ##: ########:: #####:::: ######::: ########:::
 : ##. ####: ##...::::::: ##:::: ##: ##: ##: ##:::: ##: ##.. ##::: ##. ##::: ##...:::: ##.. ##::::
 : ##:. ###: ##:::::::::: ##:::: ##: ##: ##: ##:::: ##: ##::. ##:: ##:. ##:: ##::::::: ##::. ##:::
 : ##::. ##: ########:::: ##::::. ###. ###::. #######:: ##:::. ##: ##::. ##: ########: ##:::. ##::
 ::..::..::........:::::..::::::...::...::::.......:::..:::::..::..::::..::........::..:::::::::::
`

$('body').terminal({
    echo: function(what) {
        this.echo(what)
    },
    clear: function() {
        this.clear()
    },
    admin: function() {
        location.href = "/admin"
    },
}, {
    greetings: greeting
});