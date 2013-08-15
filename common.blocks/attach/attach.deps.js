[
{
    mustDeps : { block : 'i-bem', elems : ['dom', 'i18n'] },
    shouldDeps : [
        {
            block : 'button',
            mods : { 'only-icon'  : 'yes' }// TODO : убрать после https ://github.com/bem/bem-tools/pull/424
        },
        { elem : 'holder', mods : { state : 'hidden' } },
        { elem : 'reset', mods : { visibility : 'visible' } },
        { elems : ['text', 'icon-file', 'button', 'control'] }
    ]
},
{
    tech : 'js',
    shouldDeps : [
        // TODO : нужно что-то придумать с повторением `tech : 'bemhtml'`
        { tech : 'bemhtml', block : 'i-bem' },
        // TODO : почему-то не работает без указания `block : 'attach'`
        { tech : 'bemhtml', block : 'attach', elem : 'control' }
    ]
}
]
