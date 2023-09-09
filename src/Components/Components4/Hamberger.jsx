import React from "react";

function Hamberger() {
  return (
    <div
      className="w-96 h-[900px] bg-[rgb(255,255,255)] z-40  "
      data-aos="fade-left"
    >
      <div className="h-14 pl-2 pt-2 bg-[rgb(46,49,71)] text-[rgb(255,255,255)] font-semibold text-[22px]">
        Hey!
      </div>
      <div className="flex gap-5 pl-3 pt-2 pb-2">
        <img
          className="w-[10%] h-[10%]"
          src="https://in.bmscdn.com/webin/movies/superstar/rewards_login.png"
        ></img>
        <div>
          <div className="text-[rgb(59,62,88)]  text-[13px] font-semibold">
            Unlock Special offers &
          </div>
          <div className="text-[rgb(59,62,88)]  text-[13px] font-normal">
            great Benefits
          </div>
        </div>
        <button className="text-[rgb(248,68,100)] text-[11px] font-medium w-24 h-8 border-solid  border-[rgb(248,68,100)] border-2  bg-[rgb(255,255,255)] rounded-lg">
          Login / Register
        </button>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] h-11  pt-5 mb-5">
        <img
          className="w-4 h-4 ml-3"
          src="data:image/png;base64,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"
        ></img>
        <div className="pl-5 ">Notifications</div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTntXvXz9dPa7xtVc2n5Z5oCTlSx9Fz8GR1-A&usqp=CAU"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold">
            Yours Orders
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            View all yours bookings & Purchase
          </div>
        </div>
        <img
          className="w-[5%] h-[5%] ml-5"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="data:image/jpeg;base64,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"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold">
            Stream Library
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            Rented & Purchased movies
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnrTj5L9uWYN8xgMLGWNhQs8K1SzlZlSfgw&usqp=CAU"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)] font-semibold  text-[14px] ">
            Play Credit Cards
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            View your Play Credit cards details and offer
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8uSKM-t1FWnvaolkI-NhNV0Ym7Z9ctH94Q&usqp=CAU"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold">
            Help & Support
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            View commonly asked queries and chats
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9MOT7tPPCy5Bjac3oAfO2U-xkO799sO1fDg&usqp=CAU"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold">
            Accounts and Setting
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            Location Payments Permission & More
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeu6yijrcn8sf76q35MdBIXWwq8G-5h9MIwQ&usqp=CAU"
        ></img>
        <div className="ml-5">
          <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold">
            Rewards
          </div>
          <div className="text-[rgb(59,62,88)]  text-[12px] font-normal">
            View your rewards & unlock new onces
          </div>
        </div>
      </div>
      <div className="flex border-t-2 border-[rgb(241,241,241)] pt-3 mb-5">
        <img
          className="w-[5%] h-[5%] ml-3"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAA7VBMVEX///8Pd678/Pz6+vpAQEIAbanS3+s6Ojw2NjY+PkBAQECAgH+JiYnu7u53d3fFxcWqqqorKy4vLzDT09NSUlJEREZLS004ODsAc6yCgoLo6OgPd6309PQrKyu2trYyMjJubm6Pj4/S0tJbW1wmJinCwsLe3t6ampqZmZqjo6RfX2CGtM4hfK51dXVnZmmWlZccHB17r80zh7GlzeOTxdg0hbhMkL1ck7OEqsqCrcRjm8AofapLkrlpqsSUt9Cuw9LE19yfu8u00eLM3e0AZqS4zuGUt8iautjV5Odmo8UAZKqr0N9Vl8aBqcx9qMEXf+nAAAAMm0lEQVR4nO1diULqSBYFUnQlYREiWSBsCmqj6Bt1oBUZntCt/d7MPP//c6ayELIU5CYUJjI5bjFWjvek1ty6XHK5r4ZCzMs4tmbkclxMS7ajEIuxUGBsCSFkfLPiMJIrOI6lMmIDY2WFtkEY3USuHeuyHYYQOi5e69nG2OZiNSvIDTENBVtLCEPrzCArHIDReyb8DpMCBcMOmCWQKlsTwhghdUZhBPSzggUOeJcBhlh2QJstKRdeZzmu4L/9APaCVW3QBgQoZNHloA0BMCQVbGEbG0EjSMH6KECkwYayQiECI6DO1mRm3a0vgww86+tghrBmBM1M6xbutCzgTA03BDr9RGMEEDp89r8Hz2cFqyhgmALO1AX7JoQzAkZ9N6N9r6Aj3nqoCS8ekTG80mBN1sNoHkdZg0A7PFvGSEtbFyHbtZA1naWEkfVTR7xl3g6ARn36lUztMDo8Y0bmz0Xxwf7ZkzVhhgwZMmTIkCFDhgwZMmTIkCFDhgzHBPYOtNS45JhHurD2Oce9V/HCN8IYmRLGCQoygzfYBpgwZzRjYOxbBQ/dsCNdwotFYoRufAOxCcY5TKRLwoyWslykSBdwXAqUEVJn0Rid9u1EJEAjXYB2ABnNiAEoIyxixYk/iBLpAgo6isgIiXSxpXGgQBvnVlkmFCBxAGavYBw7A4otiBY7w3mkGUph0sLtcLVwSKQLMMAkB2yR7nnEFfwTdhVwyRAp0iUSIyT6z81oR2sBLosQOwNjBEe6ODF4EU20p4CwuJQIsQX2JBTOCCZ0RbpEYgTGpTCOnYm2bgSNILEW2cbQyDjShTVhISYjPO4qMcQOCgK0nfNRuQRDs1SqfvtW9Z8zv0rVciuOhQeMnenKdVXGCvZDFgQ5cFIREKWgbJ3sDQ5kYkxUOwgheYACEBSiww95EDwnNOT1UdJiPOjzCOGOiBSEVN4DLIq8H1jk5cBJEYvY+IGQmLQaN0YSQnXSRxpIru5J1cSpktaWRFS/IAcNQSjtyVVKl7Qaj/iRcdAQ8L61ljJpfQFJ5sHxSVOQrYiBtLKQKmk8ksvmAYtak+VUSZMxO2k4XdIQS2kpa5CZNACOW5qyv0XMwFSaoBxrrTVl4WilHXVfy6R9ClzSju2hZiMNybd7cqVWmrKjQXIno2b/+q767aKygyut0q7lrdJO+nVJxYIgYFUa3nW3ugzTKq0hb/GNnCgStrxVhitLkXu4toUrTFpMT2/cly66hhHkHUYsJzxXrRNFuCdhpdEQJSwSebhxSeUKlRZLW+wsMdsGf3vHoiXzMsLDftdyC1dOmnWV1J/pKApgt7RPzxJDk7bJEnMpkSqrV93ubu7KaJ/DLoVru7REssRsk2ZuMLR4EQn4xHdJa0Aqbkipt13SDpslhrpjwyPhzDxwN8j1fnkDI6y0gxdVe0joVQKMOxpkEllieDno9lkTnqlIoCkztA3KzcB2/nZpUbLEuC/bK0sMVtSANNuQyyFC/JZdpetmv9P174ttlZZMlhhE62vWj1uMJNpoYaBSwv0m59v13lFroSYeIEtMYBhxem5riARru4zrN87Xku7sOa2Gy3zXt/G9RVpSWWKC0taMVyqSrMHxd0mor63v4YZZqs2X+VJQGs03klSWGJ8012jbcNzcZCZT7eJlSR1YjNW7ar/il6bIwf+dWJYYvzSHsSIh9cy++qy/Xlm1m7cti/Aci6RSPYxUx3hyWWK80lyM5xKSqMspm7Fdapa63jGsGdwVBYcLemNnmES6uKSpVXcAU7eH6vRVsA1xoPgeFYJun0SzxLikDaruSqhhVKdO12soGPe9ZwIjZLJZYtzSyu5JaiTKdauXnPzuWR6P7Me1gSjcebn80hLOErORhq/P3H+o9RTJ9Bac/oOXNi2TU6ShuUGcU0Sh7+UKSks0S4zL7eN1IFz0kGoq6koI9dar/0oDIdl6ZO2I2OcCCzTIZAOoHGl3Pj/kqYR65jKLa5BnmHrplBy2fu+Rh+2OqbjSQerIy5Va34jPo9XurbeCTW1Y6vDkEyHFqkujViXfk1xqpQm+sfxalnmrRXH9+iZ4SbHHlFshMIKmV5qv69QEu0USnDTqqoqxKsnrNtjqIP8AmWZp3lpr18mI4fx2WTtrlkfnzu9keva3x68jLVdW7UAgCk5JpQVW+emTFvSNWKiQp+z6KfUqTpZR0GGXOmnbQ2JqZEZTaR6EwgDLcj9wOm3SKL4RB32MBD5Yb+0BOY+DC8yUSZN3bR1yCiZt0u/iP8fGWcpTQcqk7d4VbRvaJMU9FF726yISJFof/FLSctwd6W+CJH87MZwF7fNRw3CVqwL1SY5ICzoQkkPoXvZoSCpO4XsdyfwiwoThLf1BroTlrxUS06p2ZFeQOK4PzqnlvmRITOtKqUu8StCThCZ9pjPwNUNiWhe1q7Oz0cVOb0kWEvNZ+P+Qho42JGZbBAIc6ZV2tA1y8PX7ms+BxmAYcRiTlubzOe8vbePWZyUtnvsyEK2wtzTX/hkjaayyxOwlzcfIQBrLLDFBadEY3fdqm7QIjCyzxPAIedw++zDSpUVjXN+rQm7vLDG+kJi9ssRQpSWXJUb0uH02u/mg3X9flhiatASzxIievrZflphd0hLIEsP7pe2RJYYqLbksMQFp63iiUMbgmEQLiYmSJcY1FrDIEkOXFm4IjZEWEpNglhh/SMw+WWJoITEJZonxT9n2JBTOSClRpiUKSC5LzCe8Ego0ghwgS8xa2qWChOtuDYRujVawW7uO+7rsw2SJMaVxV3JHREgIpKQw0lH0AqcaA0/yCtHOXmF4luNKO0SWGGPr8ITnFSOTSCC1CPlUfKeM3+/uvClHFNn6QvGlHSJ2hiyPZeNLrqtS3QcsSar/nHFy6D+nWhfHrrXDgDdvtspfnVb2RbuaNrcPgdRkEnKUtG/EB0Na7yy8HATpkyZcM+JKnzTq5m0cpE8aM3NSJw03WXGlLEsMecRiJi1lWWIUWdh3VewgZVli+gLiWXGlrK+N1GDwX1ykTFqrIwoNRlxEGmJExQR9jNR9d3ptpCxLTK4lIcTfxUtZ6UMzXSExudzF0HhJeeniNB7OnaPLWyVVITEE3aH1enkDgmShhyUHghQE5tcFN3/tKel6XjNwqkjC5hkaeQ/9z9nOczW1IE5aSwDdgXHXeVf92L/0eqLUC9aZq04l+yryoycNma1sGKJyesIA22LuMmTI8JmI6VuK+9LF7WD+fkifnSVmByHz90P65CwxVCOcLDHMGJPIEkM1hIv9quNtjAfNEgMMK7BKg3O6sGf0ntknSwzdDsB+ZA66nW8gkSwxMQ1xdqhhkS6JZInZUhzGCNj1tpBIlhhKYehbqtmcAMJkssRQDGHNmFSWGH9J4DwSjRFAeIAsMf6CQEY7pwuAMbksMT47ojGGVxqwf7sZzWPW74cUKcgBGlEGX6+5CJm/HxLj1VXSWWJ8hjAlTDhLjAus3yc26SwxbrB/9mRNmCFDhgwZMmTIkCFDhgwZMmTIkCHDMYG9Ay01LjnmkS6sfc5x71W88I0wRqaEzLLE7GcEc0aWWWIoxWJniWHAyDn3qhAMIwmxJNyMXKKMDLPE+MvskyWGASPLLDE+ZmfvHbRXX4BEuoAjFXKujVEWWWIohWJnidnBmESWmIAhe2SJoZZKLkuMr9ReWWK2MCaVJSZgCDzSJRJj9CwxVuoTwH+IEIYBYowy+znfQhg3x78dLXLFo0UuT4FOPr4+aNJ0vah9uiHsQZM21m/u01ZtmvFJPjQtv/nYDUOaPtZITY013fhBvhUfHv850Y3aIyrJd8KXrFJ9+seTrs/ys+Js/jR90mfjZ2328jweT1+0yXyW12aaYWOxOBtPiYp50ZBiStMei+PiWDfEkHuhj++1f82JHkNlfqK9aPnxOFFleW2xnD/nv+vf9VftabZ8eL354+frfPkync21m8XTx2L5sZgtF88P70+z96fl89PSqFEi7WG1/HmzqIzfXvXVj1Xxcfbnzf307cfq5bfHv1ZvN2+Pf76uFsUElelE2mKuLYvv87eH98nyY/W0/PU2XU4nH/Pi2+rm+/v3m/e/X+c/ivkf89flx/fne6OeiLT53283+uP9eHX/836xmKz+/Z/HX7PnxWL+9vLf1Wzxa/W2mD8mOq6Q9kN6xtjsaqTnFEkX0o3mRfqL2V3GxrE+/iDnSCmz+eVNadps8qDn76fT6Xgymc4n2nQ6GU8eptrP6Wxyo91PyB/mSSojJo7NgcQYDMg33ZyddM1SbQg3+w4RppvHeW0tzRpqKNViFg8diFIL6pR9HDhiaf8DXB79/+Ebtm4AAAAASUVORK5CYII="
        ></img>

        <div className="text-[rgb(59,62,88)]  text-[14px] font-semibold ml-5">
          BookASmile
        </div>
      </div>
    </div>
  );
}

export default Hamberger;
