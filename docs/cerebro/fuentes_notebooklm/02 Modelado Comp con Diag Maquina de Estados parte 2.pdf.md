# 02 Modelado Comp con Diag Maquina de Estados parte 2.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este material educativo de la 
Cátedra de Diseño de Sistemas de Información de la UTN
 profundiza en el 
modelado computacional mediante diagramas de máquina de estados
 utilizando 
UML
. A lo largo de la clase se explica cómo representar los cambios de estado de las solicitudes de requerimiento y los proyectos, asociándolos con clases, actores y pseudoestados específicos. Además, se introducen conceptos avanzados como los 
estados compuestos
, los cuales contienen submáquinas internas que permiten una mayor abstracción y organización del sistema. Finalmente, se enfatiza que el desarrollo de software no es un proceso lineal, sino un 
refinamiento sucesivo
 que requiere mantener una estricta consistencia entre todas las vistas del modelo a medida que este evoluciona.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0k6kMxxtUYSNfMd_f7bf3F0hOIpzgUjc1qnn1edM_Vc5Rn19MreBGYWDvHh-zYsq1oWSiooxJSWH2KftkqNcwKnnpfHvbugY_wk5s1J7t4FMJ_iA_wU2qQOUFwjUHHWT96rywv=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Eugwq1GH6_KLOMJ0t1G3H-hw2sutgIUZOlRGXdArqBaMUfSPJNJP2ZObf8hRbGABj4Pe1PCmGhe04WlTg-ak4NfbyiLL4rv91Y9alJDm1NEjdmeLZfNinweEOQehXIqTIGLu31Q=w526-h154-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21nKmL6AdGRhZE44GUeYPAp8KdsQGzbh_wTzmA0_BI6M1au3WHBuSJWYquABX9nuelCYWy2oLJto_-8aVKZ2vrYgXrg9DlkcSXXFVFTN1qzJC6S4MO9UNrj8K1VyzbMBKXA4JrcQ=w1280-h336-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Modelado de Comportamiento con el Diagrama de Máquina de Estados
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qhSDqwkCK2KFra7wnnFwFjkyE2f4hJ7VDGpbnXxSFymCyN6pHTDUeXZTNwpr4DG3P5lrfMFF2GGtMSuEI6OpuOG3ZqOX5ERJwmkskx25gRb9ULow3DNKz9p5E0FqcGNLP8aBE9Q=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0M9dXpXlC-p9qLtGN0M0xaamMpxfFjp64b2O-Hxt1WSeVDtWbH18w_xRREG77Et0ES6DizShmrlaIv-FzBdAQ8q_gUBMXwQwyysQaqdAFWmHP8PrpDaD7w1O3H7h8YxrD9ApXO6Q=w1246-h1140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv015knF2qxVBs7usSeef2Q5rWD8mc6xvZ2TQ8eH484EidvANbJWosyF5KWwTHTQEST5V4KUKZEC1L-yBByo7m6p3YiyUgVmmsjx_A-LuplC-5stVEaMt24UwxjfV6Nne6VTKNE4=w704-h440-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ijij6LHYsWBGVcBrAN0SvnYux3SBFXgbVN8rD-6bYUeATNsucGoM32rHJ9ezyX4a0Qfz-8NklAEh6zzTKR96fBPupden2tLHglkCt-4DTJ_LcI4SxVB5KhfiZJOIrrnYftKco7w=w840-h1018-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Workflow de Análisis como proceso…
Workflow de Análisis
Entrada Salida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3d46DlrQTHYKp2MvvyLlU3pkYqzxVdhi_ByhD5UrJVQQMlbSEL5iEgy_h2XjB3czMvXYb2qL1KP7swTaRLsHTb5mq7jHsA2o82W1xC-0jGEwIHvJbep_xdA8M9knJBqS0NFCV3=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2M8DHsWFdz9onltQJ7a52v9o_00zPhhKbatJbUX_2MUXeI1F5DqXMseKnA07YnJkp6PP8cschgO7TRIfYTaqclDsKatZI2F5NlIcmhYbPafXQiDoJst6uptLoUfZgHWJ7paqBRbw=w482-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2_FD0kJGsgEmo7ZwpZzFpaiX8rg9emfekjIheE46G5mIIfArzQA8xxN3kUfYsA5y7vUa6q8Wu362iPw706zkkl3gCEzlWJgoB-Ta5STs85NYiP1KGVYILWXdJOeSm0LBtnoMDCdQ=w190-h657-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3T60e_RVOCVxa2Q_unCFRWbEdbfVpsHsBINZXwc8BHOH8hVj-cvbYVcBX7W5ZUnRbmUPN-6AbxGF9Wst5eHS_9VscD8kSGvnQCwscEaiwiUgIU_ZTaxYvR0yppCa_KW1hSoNMLjA=w733-h356-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0v3cILBdaHMYRKAM3PVEb5HJ8R5n6Za1K3qzomN5bCkPm903TRePqQnD0HOwtAhc6iqUvhNqtOrLWuNHLf6n5FQ5sQffBdor3f3e2jjV_E_VnQpOFjZs6yHyXkwlI8G0MwRAI3Zw=w190-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TxRqfvjGJ6eDrvycfVjjQarXgkHnizMG138p59EgMy32MVj_HoZaeXETczvq7Tz5_0C6ppcrFbJdUFx3OSDE2QmfeP0BuQukpP6bPuGsIXAXuxAPU7Arh0gs6dxl68WnxLaEfAw=w1046-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LtqzcqVZp6aNCWuQq31maVMN6xTVot33o9tnwIuJo4DjKzU2SHdHIrAjUiw9e8YEcscp8hp2bDXMHYYFy196WMYTKZKhwoQoFh-rZQi4n2x1il8XUbUf2I8nwtcAA-7TOy7IJOg=w870-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv25kfNZJOjvRCx-Wp4vJUmHa_PVQFM19vmun0vnYFDFCzBxqwGAxtCuCdzvByvYheyKxQMt1LX8X-omiDO9yHLVIVy6S6Ro9reLkVjIA3rCFzoermfgdUXJiCXz1cNVXcXagaAh=w190-h204-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19m_iH7r7XVHIBgqlII0bqKqcmgo-965fi70gmLFF8iBJhO5TqgjL9dWFmxjkgEZw9iXkjk3zlltDzz-X_jeDZIwsrJp7co7kzz6lSPZY2LPLq9NbG8P5YtL1gIESrstyiol5W=w1049-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cLEAnHMifmHKsYzgG5nOZjigoQuH2tVoJOCTdT5AST9gRf-WidWheQMPMdtVKbbbBsd1ro087MKencHb4IQr3gE_trs7GnEKPYmGprm1IK2GCkw_PbUk4mfeMJ5mnu1WyjbMDyA=w190-h139-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tiH7ijwHMc0FaNWBzKAPRbjm5nF2B_0RuXHAwmVpcAbArOAz_8j3TmdDIAPOnWE1gSBI7Vx4V1z_72T9bhWWytL_oWi-EIcnx6LB6ogMNsEWjf2MRsfoX1Vb1sfBAuwzWH_g95g=w871-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mt0ug-24vlwHQQCVVO4wqut0DWgX3XvlnSqed5L50cLC9kv2XLgs154jZb4DHcj6BysUcr_kprpQtISs09-DHk1fEfvbk0T-3R1v7V7iL6rqJl1MTID9ILNn_3b8ZkqmIbHQ4=w190-h139-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kVkdBeHvcyIRIAhUYmZCxD0m6Iw4x5N5SaJRL3lmbE6elfbKMnXY05FDt_d3VPJUk0gCywlZ2wRafpu6q0QCZeUuQppwL3jQfDd_OWr8KV4cpGThK_Edk_iNPri_7VPHXcTIa=w850-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28B1FZH3ax_u7_BEBEjczacO0NFcKcjMvC_uPM294qIs_BLd7Bb-plfSBE5iWdE1N7N_Ib0fXggkPAv-Pd4K0AyTM34qqwNRRzr3EuVEFxz4Um_aRHdtrO-YIWdbe-rbVgjGD6bg=w188-h72-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1PUzHDID-A_WbHf5azQ2BnrsjGe7n8Z7vKQbzd6S02pFhyohAfHOyDXliZ25NzuhB7tuygc41tyHdaYbpO-ZQaaAup98ep-GcoiKxcg-ZNF-QpgMmdyZJJcZaQIVuGbp1PDfrB=w698-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2P1rp6jD1Vdae2KmY2T3RO1h62KuMO5z-9pC8cmozB7woZLsvU_SK4ocqGRpt21uRaVc7voeoxXFp5UxZ2sE6LNd2HsN0N8wMV7_iIO4k_dkLuYGhE5-Q--rGhLhPUVVjcLMOw3g=w189-h139-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2qYAShBkPQ-ilUiHYt5l-PIXYAkCr1VefJq4WtdBFKv9ZgoXLMW0IqFRQrHQPjPh-jLa8LqSBKQDqZ5qnGTYTugJfOP5cJv4m-PvjvdwHbRyKEQ8yQ7JjUu9FlPSZ8e3N-MRZLQA=w1186-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YtC2fLKA2CTsSx7mmu2iy27X6UGY910-fm0nIdyeFR5sZlyGDmeiW7SOxSZTP2ppNlLwyffkJpE5VJrhaAH8YXELe97zGEkHFANC-vFM9EjttQPnjH3xKBj7Ea0ZThvx9nu4qtw=w189-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0conXiJFiR0NJqpNwftQqer-vw5R1MuWtCs1vYRmuSwSr85OtjJX_0qr1pAsj2ooO3110KJxhYowIPflZVjhEe6K6t4YtsP8nZ5pMVfC8cnkOsxxzL5YzbIhNJJJiIPNtgcgj3ew=w1180-h247-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WEcNeYMNjRyZ6UDltUjC0fZii4OMfloAKA0TsKTDFRYARAS9bhtI4a2DOKmS3VZm8Ut8AFpQ2z35KO-_1IAfRJ2VmtcBxw8_vrdUGa5_4PyPjbWFZPQ6mK2Yq-JpwuC6Of0cwRg=w191-h337-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pqPnwf8wI3OxUh8vPQwIFYRDg-ebk64DEEXsJpCqy7WMfkKcayS-PQFU9b90XQ9RPMZEMYrIVn4xWB-FvscA_9swLlP86XsRrVkcxi4rQAQZPB2aKuVN4gVTNxI7Z4ZzbThwT=w757-h246-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2dRFABDf7l57g4Z1BP2WFQe3jyQwyrGydOi2sikYEzzeMBU67fUL4WWk2paWysohphtt9UlUDdM1shwr1AFyv1mTpay4KIq397LrzvN_pTieq_Gx2RUPUOXCbkbjp6lJYPrsJJhQ=w1163-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2hkHs6-Hi1FnqIZ5ac9lv8wEDL1CkLN3KJfnGwFKjCNXHiHtEBAEBRSOZ3lPLb2TJl-1XO13t83DFzciIQY0TAQSRF05wSC8UIDBaIvzWS7tozXstewtpUt-pce9-NyZfBUecumA=w190-h636-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cRcdDB0q7om7umhkZmRWNXM5XpNwRlMtFQWaWvNhEgfKd-Ps9r-WNB2F6T5hbKC0FO1LNXskRoQxh9vF23opnmxYNmSu4lLZlujqKtf6YWHDQr7TIwR3EyDmhUw_97VdkKd6o0w=w724-h327-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿Cómo construimos el Modelo de Análisis?

## Modelo de Análisis


## Realizaciones de Casos de Uso de


## Análisis


## Vista Estática Herramienta: Diagrama


## de Clases


## Vista Dinámica


## Herramienta: Diagrama de Comunicación


## Herramienta Diagrama de Secuencia


## Clases de Análisis


## Herramienta: Diagrama de Clases


## Diagrama de Máquina de Estados


## Paquetes de Análisis Herramienta: Diagrama de


## Paquetes


## Descripción de la Arquitectura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1dqfyXZw5fFFJU5PbwyoxndiRTDYBkI4de0agUnftlmaCn2lYk2Vbxtvu0DV1vQ8xkBzdogxQCTp6b5NYHAdStr2jvHIsN8jyEsWSbdVv1TbxbhBoCfpo7LsVNmz6dm1tCQ2ELbw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h159Rry_IRpaENS6qHbrgR9RsF8YSjnlERtjdsqPKK0saSP1N4CYKTqtdH-GGRmXMktNXF-ryq9boAFYlSh7LUD30Q-IRztxPK9w1_nVxd8KdxYc4Gd1gcQGeIdbSvcDH5mzQmg=w1280-h127-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WFwRAZ2lYzFFCkmTW1Szvxc_kNqcYDClTDXEsx9GoM82ySo6WxIIPMMxDS91hW5Z0A5DGrtLbtropMcy63q8757FbXtUbx0QJK3QwNRbkh8AzAMpjSc3tO2Ufd_Gj8tIvap8tUA=w1280-h78-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2taEVzN4CKj3yLHOmaMBCJ5YyFmkdIch0WJyaRphEego-pnGG_IhLgDU5HCnGFQ_r2MNX3zMFJrSa1YSbKZZWPV5lnsK8ewx0RF4FTgsruEroQbBZyL0v881jxmM7_gHVMqEi0SA=w1280-h81-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Wa2m_X6YiYd8GGlaSxDG2QmH681-ReFYlWMPwakIiCKgnaSLAyLJtPNFPUOCNhcSH-2ukn1NRtqyF1rEgqE5b1f8a106761U-QNStgpZdxMGqa35iwTPYjSYNIXPXrMRSR3NUmw=w1280-h81-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30B7ZKexbeZpFssmMJk5xaAiYXj4p9_i9zuKGxw9DO-NRYej-fIA_dtFRv9ITwRWQ8c-QMmSJNxaf1RjsaME3jr-bOihylqtBjyUTTdW8ZQHoHt6zQ4tc4FNEKT0tg4fGPLo4nTQ=w1280-h83-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GI6EuRa8ET2tyF_9lbUahDlmqyFd8O0eobuPzo79uQ86OCmokVIeey3InfhGl4HTntwpX1H5iz31IMMTw1w3KNhs-sYprgrYJlqTlYPRLI6JKuZHE8UGEW1Tw2M-mJJ7XilXK=w661-h210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2o-tq5eUP3lg5eRTPymXTozpKmQSMdAjsqkEFND3qd3URYaa4nSInTNZh8-yEsTn_0hb4VFqVvXN3BpkwuZd69guA2NfxIAV2ctLNBKeWXqabXffeUbb5_MHFsYoANETYd3FQj=w253-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Pn5fWuzx3h4qRnG7RQRyqgvBiwx4iVowm2wT23dEz2Mv7b5ydYNSMnRUiv2hTOcS6dP6okgCCff0odhMt4fgEIiviiv7uoVKFVAayadcp4blnV0k5LM5zsXUUz3BEQfUt_aaT=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VlB5_SRuIuXUHRqAlIWWioneAf_Ip6_Xof3fFXxPF0ZnHeUcihJucKF5BM21riBH3CnH97MhX3epQqt1XSsD2x3keW0DBnTB-BOPa-lyZHf95sovfqO176vR99HcnfZ4R1qQt=w381-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-upw22vMl5qQIYO7Xdh2l5ajPvJGeC0TJVBeH-a-pNMW-JpdWHBwkskDwvFI2o9U1sC88QUVOZiRIEyU_VLeIAq3aeKVSdcvq9HYDgEwXwcMQbQSADDlGqpZ9tVpkRC893YvInA=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3f8i7nNI_eqMjQM7sxubGNd5jPDNOOVdGJ6R4eg-DMJrkRDCdhSl5ntAI_l5gvfvi2nDx0nABM1D8ByoE3WwiNRVEWCqPCj1W13vXr4TyRN-4nQHwxZjQ4KJmDcCzzU4u-XwYfvQ=w271-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oCxVb4W4TBP2uGC0NDZVm0sJfHssy7dQ-mifo9tgiTou7hJEL7BqLOL1oqQ8cAYJehOHIp8Yx9wRejcXYQybc_4PI9yAHD4acP8X16vFAo5L63hlizeLYzWjZ0ChcMmW_RbhJcg=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3w8HStYH_AjeR-bGKf0lK3W5sbhMrAepaibz9L9aipc9KM8J2U8B-wwlK9kE0CPyckpmR783nhWj_nUcMhpyoS4-5qT9EqDTqnJqelziYoRqjfjlMnbI_98NbVGYSFGwZltofR=w411-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fsnwxgDJPJEU2Fotqthe-9wrznuyj-PhzHbtzqA1zCou5XyrJ7okPxDKl3TVgeQH91F_n4P_FS9vqXgv452HIK3D5DzJY7CORZOaYXIO125gXQwOx8t77fghQRj4ro4B_h5Dvdg=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0q8YaryKFynC6CbdYt6dSwMvTo7zxzP-UprHeLpF1T_qY7wzbAfALAjwIBoL-C23dJFtgsKqQA-UFaUvkuR8CFBj0wxER3WOeiHr0h17WX2adWuIyqgnrAylCgmmi5tDIg3DPJ=w170-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pR8jI0ZQg2Az-RzUkoXZ7dBEKrcVJNBuX4TUuu5fcgENRFsBM7QdbjkB44jAKtf16K-ZmBVKbRQxStE6tUk46DOSDY-NLX3h0FrGYdES5pquh6yPcjJiU2hSwLh8HVGd-bzZUUA=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv262YcWmXxIwL0YKDUzXpwmYnJ49X79d3seO-A_DKRpWYC3s8N2BlCZNE6e4Erh53x84if8vdaQwLnhc9JHQnI93Vcg0Tgoyph4BwrS3akVUcl7nqpezyKVaBdyk35WmbkfW38_=w724-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33WRQ1D_Wt7rZYOufYVO623oy8jzl8c3TTKpvSpYEQ07OJJeb07yzgIUb93P98RAs9yT4jBbz0dYXROkqW-ikIjLJRP-S9ZTEXd9sIfV51RhrAGHupZlEVt9uGtqt6JzvIaKHeCA=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vroNzRI5iYPWTgEgZBbvSf5LhVYIONAXZHWbKoJt6brAzmSIRt6vuK_I7hwk3ZtJkpidFjzeViptp2r-jGTTEO0nxkGGZhcB-oC5CBX4X0LQ7iE-9jpvuUwMd05oNNzAccIgZQg=w451-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GUctzJQ6cDcp5a7qJ4_unyVAUxRW7RWer_XbVQCFei0OYNgesc7FwaPfxlgEJlunnbh9Myh2_6vaapU8Fgb30XaU2xtL3-WqFF_yuN_tSm-A0v0pSgj8Q1VIDnPUAZyt66Vdr5w=w156-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3PM7-sMEGtDpdwyUU4pQLg6MNF8y_UGUOhVDc81a-nH_TSDAIYc5Dx3M9ZArtFhXsmC6mZ2StT69VoRAqo18CVbTpnSp15h19FlqDsiB3xYP5fCFa6GZQ2q7s68ekWGD5yeN2h=w196-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cnKhPib4E9QVQYlIZ8Q_BEen1fgV1ps6dR5m1xh-AzWHuE138mXfxbA-3HzsWVX1dgeFdyFSGpRgZCiVuSPkGVGW1X-59_ZILdLaSdKc4nurnkUAgQNO0-yBNVxdkLVwNHcIUOg=w157-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv31iAIcPWPOHC2uT1Fl-2O3wNjKJnudyAH2UWqnbL475xy-t0HikEhiJJ-Dh6MOvWKj5jfeIEEwGJy06ILtay7xyciqv4FsPHr5MW1iDFm-Lqec_7FE0J4xuKrEggF1VMPHkc9fTA=w200-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VVazXqUWAJNHqjaOj4gpzJuN5Ych_AK1H9G1VAWjUF_Cta2vNLxnz9D0ebgregus34SU1IsaXzpx87NjKr-R5mnBg4nrEuQo4-mzxjy2YIDZS7HzoGaTa8QAXGwfT0meyCY0i=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sul62T__VBzt48eqJfNt0z_Hld6tvy7IdeG4bBKfMDMCQCvyHw2iKSvoiffzX2F95fkL8tV568puTrzHY3_D1PBmY0EbLcinqMnkfHqlgxUxNgXmpP4Hmhewf79vUfhO9XCV1MQ=w451-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0J2bG5TD2ws4iRjgnuPybcY0C5KtWhUbREUjxKoUXGIAv_jWMh1lWI0fYiTeA1Fm3tvkY4iqhG7_spYps2bZQwVF8KZalHZGgcSJPsaStK-G5T_QulrZ8if_Ioc9ecjp5iQlXVkQ=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bv3PAteJqO3jvD8OCvULAIRCt9XpM7gb98uzdreBiJyfTMrEhl7W-Z9nrqTmQUSFmjagV5kWPBIwTqAQsacBjleHCxsPoOKTgLWBeGg1lwiIl8bi2pl4vQU-UVej98OpkwAekgQ=w196-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1sdUkCQkr_ewtifiuQHpK93DfHtqYZGCpvwzA-s6hakSZYwlEDC-zOa1TVytz3ML6AL7udP38rR4D_ARWTnsmHmK0a-JyFVI8yaYP2vYeEmNHrTDcNsydJvFssDLUBSBD-NCR9=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Min6qisdBBb3gG80eS9eSsLOgi5U2fO5Bsg3ykCUxnOZr3_Xp-hLLIN6c9w8TFUoqxe1_bJHqIhD-862mklKNRjEah-D99DXjNBt3GJITjvFcqo8M0fZbmg6IhQQKWWIp3uWr1w=w499-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Hcf1BOfGS477L6fNyOLesibPp4-eRwRJT9QPr-X8B2iC-es4YGYDjONBupD4XSQ6ynzBdjW-qeBeJ7yD50OApf9VRi0HgtLexLxS1AXqubXEmAnHUM6kIMZvTQzS_tMgsDjU=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3qHyM9EawQKPeH9BhOCk6tkB_5DyBX51FuBL08JK9GU8CFxn-p8qlj0lQmJQiLD8ZmYcmS24KXQsglO1SXjiFOT1D-8Wbi6iI_SY-6DUh50eNuMFvYt2OVQyOBFHDZur1xa0Dn=w596-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rrRbdRX54gu4iWf-48XIynI8k6kzcpIf73zcf4qRFOctlVjA42jyyrK25DhqJFz3RMlJUsvDjWbIbBt7o_d2Gx4KZxT8b6EHYPVVk9VuWrdcXLcEO0mOgEIE2EbWfzuUeqnc8cQ=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2alNKpqumBecgqJUgRENgo7JiOrcxC1DJKxQgRKR6G3OEjDOubpUGZMff-quutyrM0RbcoEWLu1aFLOw-p6aNp1brHgNUm1fiFEMJamSuymhJtfbZg_F2qgAOPuFJJ8mpw-xxJoA=w346-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34Gvzd6ogcn0ZCPKO3zwTvI9gc5KYcC5l1w7zkbbJQnynLi_tLN6H2uB6kkYYw81V_QBm0b_CE3JOqwo9wZb_XxMeHdt-bGrdSbwUqHr2JohcLvK3FPUzjlCBhSmWTMIfGrCVuDg=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3o_Qc2EnXL9yYvpsFc_MbMFj36oQVyFAHyMFicf2vGDqnN1WoFsQwpzJz8pYvVZshcr54bFE_npgjOGUzB5rgYAwLgxZ5jXdDllX2AdVAu8jc-J8soNOLe8U0l_0W9F_fq7wT1gA=w333-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nZvxwoqQO24DZWmrqlo1yJU2gCXvfhtBwzVCayeWvWoUgqUR6M8xwRVEfLL4yD0mKlayhFA4KSCbbG3IQyW4S4yPpv9DUQzELgzc3CdEEP7O1o4XoFy6wrrUpI4h0PD5Yi9uJPg=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0edwVpDOIMY4b-Cm0Ju5VEUd3fmArWm0r1m6m8T62uXlrD1X-__x08t7k5FhEwXngjGCVbhb2QQN1Lx84CG-JsurshR_0ewcvPrPo0kMKhHIJLFMGGhgMcFDda6EhDVIUHXpVDmA=w385-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1H92KxaJ-U4B4F01H_LIgLYOedbIbTamNn5ggJYCOQyjfafv2EJT8e0kNy3k8JA8LhYOx0LlO61HsWBen2hbDa9tGbDFo2KpPTQEAnQpl2Y_YHFlEnO7lQMgcM4jBrsuloIg7YuQ=w137-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07trq2qI33Y3_tvk52TFMH1uFfkXaHmQOwzeEonNx9UjuPTzmbygZlrRJiHwyddKVMIjytADzZL6QYBPH8LZugrtrDDra5yo8iYv7oR7UZrKwf2rBpnwqjriS-7CZGoJygLIb3Fw=w337-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0HYS1lkzVnCOckMnogYXYkw8GVBJw6lFVat9GGu2VKkvJZWw1EmHpNz-G0-N_oFTUFi_zDIKrRgDcw8nMiRkLD4T5D5NTd8k97ZGgdkFA6D6tcVd7ueCnSHvoT4sMTj9n3PKgh=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-l3ypba5UjOtTtloJtH8sLrDP7LA--QXucqtKbRGvC30f8QO1lN23SogC7DPRFfRkI7LRCuNJ8-7JXZzVZRTzOXOf-BPgfd0RcCXO_APz1Qla0loTA9da4dvKVqEyj2gs_rvF=w170-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VGWIAVT7BpFrgP7h4M-owYC7u8bjvfOrl9H5-pdouRGj-piX9eCXCPyefUaP_1ZEbsCOc0pNKBotPx1hfM2KadNqZL6vPe4nCY52vczJsNLY2mTE_hJMDOZDp3KhPGMywhAM2fA=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aAQ6UQKbTqfjBEQJlzi0S5LBxFHr_LF5TetDr8sfPYSPXOSb1CQs6FhFCTJOnAYP6Z2kDae8Xf-uKf2fiur8QrOmZg3KqmXomPjY_JXr-TJUCvM27bYGw_1juCP7iUO1-tZ7NiA=w724-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3I_qKQM6kKa8tgfCh_Oe8Un1oknWvuTPCxismnpqvrraxOguJcL_BhfwNPegrunhLEHnXyL4cG-mgMWaW5IpwNkG4aetSfcoEguAZNEh07yDxAKk8ATMmvkdfnehIHKsDjNHpRWw=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gYXTXmAtDpXfc6f5uvN2xkUIm1l8Y5gFchd40oDZLex2e2mIav7W7LE0w0l2qGZ9Bl9_cKyguHYPR_MKqb6CufM4Zmmcn3CZkHL2OE6ie4E8gkDEPkzS1PuzhVjs_MveO08fdYA=w196-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fAz-JLRfwzZmjlT2kK5qPMAGlsvnf75vlcSyYssjuIMk2rMMRqfNN6ejDjJIgKQpTvGJ0tBJgpOgpzilW-kB1O9c-u5VKTBq64cJ-e0rgpTRv7Vvpywz_jw_LEyeb_K1VK07K7w=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1doe37mNqmEuREY7nGPn0JB8RsG6Dn-4mfh_RzwTVkyIOnxLIp-K_sQqJQ6OJ4tsWMBSS-VyDz7Xpr1qNnl-X25DdPlYl9QGJnR9YWZVT6Rv2jIvxmjrMXiaAwqKY_OftjPpc9=w390-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Btxhgr1148-V7KFrnRLeEU0k6TgrydZ_ftTyuqSpKBUwlP_vdFRCm8S-pSxrIPdWX-n-NNqYoJTYKQhZ1h7bbSzuDeqSt4vITGafL1gy0dlaPMFsGo7BJoL8HzfakYyRShNPtHg=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2674syJc-LYiC6thEtjVn62ozUd-rpLqge-b83sjATBMgBvSMgAKEWKKy4mrSLKh5qlRWxmq2RDg9aMCNbBBrFI3qipcgiumMDo9wbS8VN522vQW1sF24ZJnfr-a8l0D29WoSWFw=w196-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1f0C0EQ6w6pBeqj1DthDbsJFqYJ5SYpr9i6_mU66nNFgA3jWggtAV6ZYFTG22nSuBBFVj0Fkc24GSmHTurbfW5DB4z6J5wIAkSNeGYa3emoz9jxydhbaUuKlnE5nJj11r-B9xyTg=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35WjCd6RL2hZF-7-dejIdCcGVWYBZY3EgeeBEGCwHzklBqFiwqr80uEyrvdIg0shSOiWUd7xXS-895Sb6FIDDqR0X5c5We594hyUq57FjuVV7KfZdsU8P7hDb_zpm2Bpzmefuwow=w196-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33jiqS1Mw72u8FA45bMiMXh9vRsGG5EfKHkk4VSzKG_wdRL1P6gUBEY-KiEmmw5slzkG0me_8PJNk9lM2-B4yqWB0eFfH52Q29kJjAsWPIONa7JJ6YspGSoyO0EiYcKJ4MDdNVVQ=w126-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jQjjM0DfIaQtTHGVmwbZuPQ9dodNnImAMb7GLwqfXMC-7U8XMvUmhhu0vpKXzJT_Y4NjqtOuSs7suTSm1GP1XUERCPWBdgjBFfZBqtY2c0UtpIlliNT_TJ_LjIQu2z-SHq1fGkw=w359-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3lyrMhkIXztLGARMvaqPbgJoOvg4bEtXsLblV8pR6WNZjK3jiSzir_TgmkdX1KiErD26sPsMKRay5oz_Z3KjHoeU6kcITBN7evOhgrOv03Ptjoem9ON5rha42pr8mH_Zxj6YMa0w=w126-h175-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿Qué es Diagrama de Máquina de Estados?
Un diagrama de transición de estados muestra una máquina de estados,
la cual especifica la secuencia de estados en los que un objeto puede
estar, los eventos y condiciones que causan que los objetos alcancen
esos estados, y las acciones que ocurren cuando esos estados son
alcanzados.
Son usados para modelar el comportamiento dinámico de un
elemento de modelado, comúnmente clases cuyos objetos varían
el comportamiento en función de su estado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XaXfNLw85Ujq8UyK4d-GO_lsXNOwNbYqRHmbZEchUzgnbkYKxsxkVJrFfz0kWoCofrHuUZVCw6xzX74JJVWoSjTZhaD5uSSGAGHOZGPf95Cdo5Wnl2MGT4dlgZflSbg9nWjUMSg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KQZ3W1ROFQDWWl1tplHb9GqrHmRf3Gi7t0NoBUBjusLJb1uYdfIAH2ifXNMESHiEwX6KQReH-eelxeNkXnOKV8Gim8ykOkZbomLnFUN5MJXZCjpfpUpOC4f3HXgsQ7FTBD-Fh=w1280-h159-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0jNZ-KRiE0sLvXqPBmFTWeyJwqAhskLdDEiVnwhg0Skzyz01Skg3aov_rhSxy93K1TNvb7_Ighzs-D7Oi0VQjKfiePXfq_2SF-uMqN85_G0mFnzDQegabndkmdtX1Wweu_Pryo=w946-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-Ksx2LfqPEyimXEInh0Nos8rzY6eAedGPyEv0J4Kl4VBGdU8hO5G62CARaocxpBlPtjt5x-ml_iyKtXy0KXazEgomTpyxImoeLtXPTFk9aZAgk7xs-Xd8ShTE4T4cjULh9mJ3CA=w1280-h140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kO9XWM7s8pk8mYqcvnOd4RleWUx0evCEu5bQ4KGdaztfefSZHXa19e_ZDggWsHvMwvQI46iiamGUjqFZC8J4hJLRUgzlqVlEs-PliPoWUsmz5t2KOmkz-CngrdsUiJE9-tYaeNw=w195-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rIksZ27V46TWeDjhWQH0ilfuYM2uOSj26Z79gfK2WpYZP9d5UObgkIY688C5kZ6bs2TOI9lV17IUqKZt8UtbykZWrk_1wiDv6opOgJdSrhAdOeCh_M1k8tW0HVgRnOd-NW0bw=w167-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BFfQnT-2O_dywT__c69___K163r7n3-NR7EJjc-1mV3jMnROb1EK395-IjYJtgYvkd6J8jY9fzzXK1t538t4zL9todDomAt4ARqJ7_I2DMKccwQ4LYW6oNz8esSliW5BuQNOuLQ=w377-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3_Fi8WP15fsgPC3qsGP6rHJQMWtQOmje-RYRw49ONlWKO1ABwyRhYWW2nkW1rRMsmic-BXYG69__ZZ20L18woK2nG6qhEkjJnSshIW9kNBwmuuubnMMnn_ARgzl9PAP9US7m_FKw=w195-h175-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3K4Dtz8e_ai-UKhXPCXA54jRoAijSF72WCQYp3yXmTgDRi3O68xx8UUodK7xrHTLSUDtAgADtmnG-z6T5rjCo-sie4zEUOFWU5RtA0dgOeparHnIR-Rao4Gri9X_7siQRHI5bS=w605-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Yq1crLARqJ_73nDVsFG4cY-4f0KgUt8OtRWJ-S8M2HRt_aJhM4GIOnSc6gFi52l4MTqXVZyy3Lmgxwi7IXj8MJJDpndT0C_DTpmau9MHsEA7ljHjHg4KSc_fhPUhydBfnTan-tg=w856-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pn2xDw1j-XfnwkgIynP4ngr70fXvVmew8sPftthhVXGoJVTPwZcSUQu6_vWtd6ZM71UscRsz-IBG2lyWQkvJz8ihf44GsZ-XnJ8ZA74gIWAMKc7t4dBFmFYk61yr4jwLVDJ97Fg=w167-h233-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qaXGXvQRrNTS2Qp-ivrq31u-2Jg7moiw5NyMLs6Ioi_Og9N-SI-YR3u_0htDqSfd5RfUCZ0NEkyYg16smQhevP-j9ERxgCridWQJhiEN97HE_nvP2rnuRJKpo5Syn7957JUaj=w1280-h519-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Diagrama de Máquina de Estados
➔ CLASIFICACIÓN: De comportamiento, dinámico, lógico.
➔ Uso: ▪ Explorar el comportamiento de una clase, actor, subsistema
o componente.
▪ Modelar sistemas de tiempo real.
➔Contiene comúnmente:
▪ Estados
▪ Transiciones
▪ Eventos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2KzgYS1YkTNoJX99h0sF54_YQzJmsPJFX6khl5rk4c7eHoVtKt69nzYup3TsKyh5VtP-Qg8aCDAr9xVl0lWieKfoljZB65dvi0PmqDzDf85Y8NaGZwiz57BMNm5tvEL-1PoZCKvA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bVvgT6F4D93GyYsW4BdeQrQDN9MiKSuHE4mwSSbdITOIBLJjZE-cyINkVlubqp8ymkqRRgYcldykWYzkLLe154viNsFO1t3Sr10IXE9ET8rib_COXphv6IhOkA78rWbuPxKZW6Q=w1280-h129-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gvbhaLId8Vbnm34sbiBmyVGVJECoLSD0asORLQdT134VHJ6UApfk6Uxov9WuMT8jQdxCenbq8nujyCkUAwsP83eZcSyvHxcJLZ4ABQyUQq8LZSnjURRRIhlEfzsFU3wl4SJxNeg=w1280-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1JV-zrHmiDaQmeD39oOop5e0SlQxAxagT7Yjk0gS8hMu9m5-6L_AlZ9tujgthTthl6g0yDpDRSSrrL4PmJqeOL2CO-gvcPRxgNEzprLilg2Lql2DqPpY1GSqPZaJX7qzXs-gDG5g=w903-h406-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Sobre el Diagrama de Máquina de Estados
vimos estos elementos para modelar…
class Class ...
Estado Inicial
class Class...
Estado FInal
class Class Model
Estado

#### evento disparador o caso de uso


#### condición de control


#### estado origen


#### estado destino

.
.
.
. .
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2mxXaBcN_F6PCaOExQ9paeLF0IL2m4junsMxyfBomN-Ie9OoEfQAhskqUapwN2rtXyAwYzmGFHIBr6yK7aJ4eRZvlpSvTfYtIvHNopv5CXPGQDZ0EpSb3EuFTqClsMFiGKVzka7g=w878-h494-v0?authuser=0)
Caso de Estudio: Software para Gestión de Requerimientos
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cDHxWIEmuiNFFTmtF9w8Z98rpaaAUUnahoQX8Cge51ax_3XkGkUZusYvJOB7vfnCImhSvvr7syNWsWRmr5rEknzLDRSA1301tGaslCCjPv907C6t7xmmjBmOfCyrbyMDIkDPj2w=w501-h100-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Reglas de Negocio para la Solicitud de Requerimientos
Las SR las crea el cliente ingresando los siguientes datos: Cliente (si no está registrado como cliente, primero deberá registrarse); producto de software asociado (si existe), tipo de SR (selección de uno de los indicados anteriormente) y una descripción de lo que necesita. Al crearse la solicitud se le asigna un número y se registra la fecha y hora de creación.
La SR creada por el cliente queda pendiente de análisis por parte de un Analista de Requerimientos de la empresa que será el responsable de evaluar la pertinencia y factibilidad de lo requerido. De análisis de factibilidad realizado, puede resultar que la SR sea desestimada, o derivada para que sea preparada una propuesta que responda a lo pedido por el Cliente.
Luego, un Consultor asignado toma la SR y prepara un Propuesta de Servicios y se la envía al cliente para su consideración
El Cliente recibe la propuesta de servicio asociada a la SR y pueda aceptarla o rechazarla.
Si el Cliente acepta la propuesta, la SR queda en estado pendiente de inicio. Dado que la empresa necesita un tiempo para armar el equipo de desarrollo realizará el trabajo.
Para realizar el trabajo, se inicia un proyecto de desarrollo, que pasará por diferentes etapas (Requerimientos, Análisis & Diseño, Implementación, Prueba y Despliegue); el proyecto de desarrollo termina con la aceptación del despliegue por parte del Cliente.
Con la aceptación del despliegue por parte del cliente se cierra la SR que dio origen al proyecto de desarrollo de software.
Independientemente de las razones y los aspectos contractuales, un Cliente puede cancelar la SR en cualquier momento anterior a la aceptación del despliegue del producto de software.
También debe contemplarse la situación de interrupción del trabajo en cualquiera de las etapas en las que personal de la empresa esté dedicando tiempo a una SR, para que el tiempo no sea computado como esfuerzo asociado. Cuando se retoma el trabajo, la SR vuelve al estado en el que estaba al momento de la interrupción; a partir de ahí seguirá con la evolución correspondiente a ese estado.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv21Gcz6aRlUTtFEDrSbThNMlY5gvDefU7ASuo0nSx8eyqNpOgjlpP0994Uj7vc0jXWDQznYGiWXr4U-9DSnJ-Qu_LUDxj6LyVfXteSwkMIQArc7Wv6IU-G_NL6hYu-FhyINiZ1m=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38gcU7lBZqOZTfAIVbSGKWmnM-Ba7JoPb0LZPUtXEvYtqhtsRezmk1tKW10niQcX6wQYlxkKkNbLHHk0jJuCv3jQ0rGuj9BrPAVIx7g63JQroNdwWkavpFr9LDDtIOQSF2QHpyXg=w1280-h611-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Qcv94crrGNpgdqhrayYQ8azi4JRtiPOxtAV9Uja2gAYAWd2DPhrIT-SJ4rkyqRVCCplkj1m6NACzPaIBjGuBkE8tbaCeeyH7ZikyrCTmBlCxzJKIbM2Hzii28-ZfVZIUAF3uerw=w237-h101-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos cómo se vé la máquina de estados de la clase SolicitudDeRequerimientos, con lo que sabemos…
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1g45-pT9DlzDUZ23yvoeTKY6du0uuxNUzcgz7dUfTcBUnczxN-hACH15qTC9ypLu50TrO9ztPdFAXzlncsJPXY9tL0ACIl4YCweidZQ3_ogRNxCtgoG6eJKAVAuNJscUYSdyNiaw=w501-h100-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Reglas de Negocio para la Solicitud de Requerimientos
Para realizar el trabajo, se inicia un proyecto de desarrollo, que pasará por diferentes etapas (Requerimientos, Análisis & Diseño, Implementación, Prueba y Despliegue); el proyecto de desarrollo termina con la aceptación del despliegue por parte del Cliente.
Con la aceptación del despliegue por parte del cliente se cierra la SR que dio origen al proyecto de desarrollo de software.
Es necesario poder informar a los clientes del estado de la solicitud de requerimientos en todo momento y del avance del proyecto de desarrollo asociado a la SR.
También es necesario poder informar cuánto tiempo permanece una solicitud en cada estado y quién es el responsable de cada intervención (cambio de estado).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OK1QkKu5uUrAKIUpqHMLqJ9R2Q5eBPqAFmQrUrkZk-GMVKq32-RJ_vAsCVrUscPj_kuxvIYiK7kQ4jjzdfDgH6Dz2Uis-R53il8nOEic7wuFgzUXgRk3tYQRC1ErVgJg2reZn1Q=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Oa-Hv-oPfK9THVA7mYYFtqxQ5SB212wKwJtgeSOCuvJtaoz_C5gmpye-OKVDr0Z0NXD7JVvptx9ukYK4W8B4cl9rIXoSL8GIKluC41SNx-XKUF5O6CuNCLOM7DIbXKKaM-oiG-Q=w1280-h614-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17kSMajlEs2OWKErLBchdhK1DDVfmf4SGsdfhdeVW3d47QROYcY512smHkYMK7Vr8rLz8TlBO_0-oU1-1KO_UzT53fYiD7zy0qZv6WUQyeVdS9GPh9EGkg_1oinoHKMae47owFug=w237-h101-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Veamos cómo se ve la máquina de estados de la clase SolicitudDeRequerimientos, ahora…
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gXr4ZsBzpW3bIf2XUd6Ll4RDqKTsN2_uaiXet4Z-R6AMlrcnftv-p8EgEHrNbzVPzoNZ8g9QuYx8Ndkg9BeIpSaZ9rabPSJKa3okhIulXr6Dh-GPqipC_lrJEB01_HpzEoCiN=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv183MNrpSfoaFfPcJyAvfg-8COmrwfcwM1dwjWVo3azvdefhDznTj7doG9zC-LMUtIz3osA1tZeAgLF5Ma1SxXRclwllIMKnNuhVo2yhmhXgYA6IJoxVfPK88ZtdBnhjSIRLUvibA=w1280-h608-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos cómo se ve la máquina de estados de la clase SolicitudDeRequerimientos, ahora…
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0j72mb4ELDd4fvygcJPkCXup8M9XC_ScjOVbJ03zQIp_Ad-01djFaRTr524SYUAhaK7fNMktz5DbDn9KPXNQ1OW0KUyscPFscMMB1OiHTfU8tgSZ7xky9KgvDY9ZnJfd23p99yDQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0OLgi-jKaG2G5_WXCCSus34NcPVDV_2LONCO56WK7RUD_wGjRX6zbZCA-KoDgeIU4i-wf094FSf8OTQcWGA7l7etk4PJTabvZDjCZSoGjWvopcTRBWfueAIb_xsMsVaNVJz1NI=w1280-h326-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VJ8ndGOwXj7ndbRAaEtzFKAPF5tvn5uwu9luY7bycd39dFVSmeVh9jWUFkzLkgEXT51z_0AoXrRmoyYUrNvZFblXkePnuHwjaJ9WDAYl39ewZ0AyjUcjb-hW4uoWouPUR4nqt=w1280-h302-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2yiVOJH2wOGNBdtdAI4JDKTfr-eNp76LlF9ewddpwjRDk68DAv7C-9YbtAmB7BYT3xPMskd24cN4u4bIIGTpYInF3AQ0ekL1FmeFwGNsq9jMFHDHVRBdudZpvX_5hAD5fA5CDj=w1240-h512-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿Qué vemos dentro del estado compuesto EnDesarrolloProyecto?
Proyecto de Desarrollo

## ✓ Para realizar el trabajo, se inicia un proyecto de desarrollo, que pasará por diferentes etapas (Requerimientos,


## Análisis & Diseño, Implementación, Prueba y Despliegue); el proyecto de desarrollo termina con la aceptación del despliegue por parte del Cliente.


## ✓ Es necesario poder informar a los clientes del estado de la solicitud de requerimientos en todo momento y del avance del proyecto de desarrollo asociado a la SR.


## ✓ Esto es una simplificación!!! El desarrollo de software no es lineal, ni secuencial, es un proceso de refinamientos sucesivos.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv30jODqCcCBXWeB7AdYnAgDwd4JpYyDY13rdRF3O4USA0_cXqOyu8Jbum4_A25ZEShme8rBDm0FZqmGL6pj0zGTrAdyWiC9MNF0G3o9a5_tZBAryZv5aRIl7HKB60HpTqggR90wtg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2HYEBZIWoIvX7ob45TuW7iFqnXz8B8xoo5VinjOlNZ_V37E_DZYgsRuJOKkpNwIT4XLTCI19-OZpY8HCREjCtbkXpbt0vrzL3LrOFtjlqTXTZynIjk4E3Xu7rgtQLHyuecEAvpIg=w1280-h818-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cUWG2Jbzx5_g_cvjhlRz6YQMnA8pWqBT_xbb7m8YnFPMyzUwSJvsTrKfq0S5OGyp3FR4UpsM23WnJMX0gdYuaTmTlR7RJdT27h2RTPxCMl1aIsD2tZVjgIKqeda4bW39_P61uOg=w1231-h512-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1jvONRMH_9IsUVIi6cdKTCAQ-ryYyjRvk58eHgnmb0JazOY3_iQpJ3rq-glBId7RXcKPzfQC8EaALV7plt8MkacpCQwI7rxMSbghZPkPU3MVQbeseKZHxy-fgoP0V7-qEtqCQ9zw=w1094-h398-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0BX7nolflCF2TiibVpYZTLAZDdBm12uH3i8afVLh_40-shtz51BLleGmvJWuOGsCavF6im_Jc7NfSGjPQrmWa2rxH994XZUmmNNbMWTeayraHq50To-P1wPo4DkIdLTJRhz82XFA=w1065-h415-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01vWmDrTuu50PqqVu9VTwEev159DjWaVf_ROtcObeqY8QHtwOCcZxzdbzFqclEVw21CxQu79NPs_x-ndyd-iLBIr1j8Z9kAKbyJFAQpvNE70_DXWhSiaasZ9YsjiW7zMwcQMObww=w1280-h1210-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
✓ También es necesario poder informar quién es el responsable de cada intervención (cambio de estado).
✓ Es necesario poder informar a los clientes del estado de la solicitud de requerimientos en todo momento y del avance del proyecto de desarrollo asociado a
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2J_n-8Z95M_0VMW-N0OMb5NUQDAJo-X016xG47A_FoZwg6HQmAfsof-VWl7DtOxZW7uBI9ePZdZ90WEsQFNDQzrUXCMtb5abuJyb4G7h6BipSndz3YHg_8peAnV0j25d7apIK0Sw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0dSuDUZS9s0CJMyTKP080QqLvJyBy35Hy7Fc9FXnK7YoJIgjI2yvTqgGjHGOl4V1v8ZTexmdE1AENgYLH_CJJKeZ285rdFMDHzD9CaplUbcEICXdK2g59lLCOtVzE8M0nw28Nhjg=w1231-h512-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2p26DCw9Fn9A_7vLqzWZixplmxkEUjShUV0Pmf4vPyOmPxElai3wyG9tXmxbEuWujPS25cFx_H3y5LjFeEHcUEm47GS8CV0h626S11KmTSWt88qWXwfMWZHJSjCBcXlh_22VBXXg=w1280-h787-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1n143sqwURg4JM-Pwdrj1YV5JOA8CTZB1uy6yBBps964tW4sTqPiuT4vQfqiwRrq0FcwM6ZH-DRv-ZT1S0P0Mgg0jgX4B7OYi1D_iBzKJpw00NqY0_YXVqpehKCyKfJJaUvrCyTw=w1280-h1210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1wqJhWM473PUTTDf41YJC3RP_-4T9H6DcUwcxwiiQffJcqqb8gdnZScJzhxZQsgARy5wPe3ee8kJSW2Urh-q7okD0ZiyyK6w7unqkABTTBWT1Au0q5QLwQNP7kzUtVTAquhJRZwA=w1280-h818-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1zNqpbf6U_79P8Ul4-TjAYtzvIcgEIth-tZ6b7mjF2I2_HsGbkBA6mhFSFUBUUYV5X-703pkC7X926LoCLiRbAPrFKdDwrPUf5Gi9cN5o4iYkcAxbsYie5WoVIJUk70jOvB1Td=w1280-h696-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vjYZ-xI-9fIecFr6WdaHGPs7O3DbZHCReL9xKrqLEoTuBWc7e7gERyGlnl-3mTtMvWD7xkw15LqpH3yVXMqS-8hMKWYez9GPheiUmUpKiPaKY_lTc5ho_3UInPcTs6H7UfbWpXw=w1280-h518-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3B_Yn9VOCDTSZEzfElQDEsOQKLIcWxFWb_mH-tRjquBJRlOpHzDsZHBrLSaAvz9XIFkmqRn3S-zQb_08Y52tWvmqts_DiySgDiv6FFZkdvER3ePCmKnAg1mB-MkZPQasvKJRHSlg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PjYFVEqY_XY3Xyqf6C5XrNfTNAXte5eUnzztmLW5R6BzAO37fwSEQaqPf_bfJTFRF3Rc3I3gnWOJTtEDU_2A73lo4eXX3PNMIxwLy4XDshb-2JxjRIhHDUcioRo1Q7hYO_EBsxw=w1231-h512-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lOviZdIn3iKXgi8XX3o5fesVTE6XK5daRWVBdEyTh4vIcrk3dJeRsyX_zXi17hdu_KbPNDrNb2h-vg_QatkmKTTCca2ahGTGw1AGLeK6wde-t9oXxoumbGfZw4ZR-PUzjxqFg7g=w1280-h787-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv37YTvXm8W9ZbS0xFQwpbaBVjUAlj38kF4GqHAJCw1kyPbbIQ4T6PB0L_lj_SD2ihT951Jkw7KyPLH8rXvNm-b8ZPo96t2KbA1gLjk9NcLHIbBt7pokaajOTw71WG7AgTVjAcT04Q=w1280-h1210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3z-QcoOHGjxa8PCuRwE4cE-GSpSrn-O_BIfTFhzoVcdrZFPmMPmUSs0KT2qJvznFbYi6iR2YDgZi2a0DfC544FJi5baHaHPnxZgYcvurMzbde0jSfd2VMdaf2BCMt4RfH7DTs0=w1280-h818-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2doEx_08QUnrgkdf_Et8d_UYxKwFVYhfB0LtT7zQT31-gwgvm_KRmEOB4M4av9WwgCJNZcW_bu34GDFzIlx5TRCd33unKsFsDXJ_5MmPGt-4-fInIzAr4EjqWbx-cbZ0BLgBTL-A=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0d6JTnt_mW0hXNrZbZHVlnYMbDw9ehbm9aVmHHKEiFTzI3dQ-O3dyi0qRWs4o8j70Wvlo2rkTZT53Mj2UhnPmeHeZlwJPkxoAhjvyFfNNAC7fa1JXsZAdZg1-UYsSMefgFrzu1yw=w1280-h1210-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Ki7VUqzQzHpsnwQ0Iuj8RTnvpxyR-KCIOQml2AVZAROctDPgzvgA6WdvVv6qHu5oQt8xca43A58mrdG2BrIM3RDno2tw9dl9BeJHxNfeOoL1B40kVvysJ3oE2q-xS43kzMw5CxA=w1280-h597-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿Qué pasa si la regla de negocio cambia y dice esto? “Independientemente de las razones y los aspectos contractuales, un liente puede
cancelar la SR en cualquier momento anterior al inicio del despliegue del producto de software. “

### La transición a

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OEshq4ygL-ts8kse1_UGpDXlOFaOJkJv5GBEG7M-Ji_sJrFtEfDoYgHXCbdkAzNyvmtNGquin34CnYTZqjq3qNgAUFYGDJj3mC6kMSqiDSBW06h-HIqT5AZLEGeaYUYgk8gKE=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gD38Qpob3Bzf2o-4WaHNDelHB6UrBnukcaOzHjXQUmDAoPTUk3f_azw6XBs4xroevcCpDtlmSjBhOh9KjFuN8xBdSRgFrJrUESqHUxM9ppawzvAm78wzzfStzkSfCLon3YlDn8g=w1280-h602-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3kSJr3cDCkIx5CSSzDMIx-kdczbsC2rGGcokk05Aie6j7RWVfc-axpKSGbR39F2EfAQPO6PoXdf1TIIfVPjFWcd-hJxzJ97tPkJ9m-Jq336mTSTlWDCwz9zayKL_cjhHjP1z4Y=w1280-h603-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
El pseudoestado Exit Point se puede modelar de cualquiera de estas dos formas…
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1pxYK8I2RKsdopcjuPAqkwwXR1sByZ6tUIYJP0EmHk2asMBMhq59LSfgQRgSGoJ2qq8FLb_3Z82OvoCMi40tzkv8VoRgsiUF5u3e4FCm1kks3_1GfMZgbUua3VrRRclkxIKsRK=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CXMZdZArfYHXjYWCojtZtuMXXGEZ5HD9OYh3yKrO593c9aFrXIMJBKB74nIXFoneLRmkpNuaeq2dMcKXba4MfE3rRI7ztPX8rUr0PS5nXzaq4Aq54_BZiAbiCUAOQccz37fVauQ=w1280-h122-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Z4-Z6X7hJJTCOX5TzgUao6d2_MKu3ZSvqDkCObigeiixik1rRBSvYlYz4b7EkkjOeW-cPMWt7H0NdqRLvI8yVt_2Y-R3D7fJzghYQ5M8rvEQtq7gW81ImoR8kO9fP5Pg1rmFg=w1280-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2wAdJuRr6ZbcDz36SRj9iPX5A9zmigDCYNfsHA-JEu_eNU39CoPTbcL5hL-jmAJVVC5EQaahD1AEDhVBrQB62sohMTzGTZyT_kuGwRnKT8OIBJhMwXGQuNUcc4eqzR5J4mbGce3A=w1280-h213-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv38WgEDC9GsWMsJ0Hx6dbQKXVzcnOUX3c7x9CGRbwB9itnDePOowK5gB2HPuSpaZ_G_jc8M6TBagFVHjzz0TeQKYLcCq7_CNc8AB5fCswHBx14vgNbCf5MIm59vCbS_aV2U8tSo5A=w672-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gMsKIvi3RgfxNNrvWCyydAINvsbM9a9xnb-_F4UA3AfS2_zQRcCxRZZpYX_z2FnPM2z7iRyHatJnpTC5WKS1XiaTRkLwnE0OHRKmXHINMUYrGwq7TJYqOn_MaNZcIv3Xs7GQOLQ=w128-h110-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32C1OZRsbcOs_XgAcs3kUR-7_xQ3NbemUQSGT7k7nO9vH9dKcydnFFM_uOI-I4tTNwJTmaLuyvi3t1Tae44T3SmDgm4oIBpwB7gnR9XV3kE7q8QXtJyD_MfwVrJs0nizP6-9Ry=w120-h101-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2vJplR8YVG1Bx0y8Mu6ZVMaKbVXZi1v_sMOz9Ud3zYgtwD-Q-S6yEopsKv21N-rj8bL8scq5akJe0Q7gq954OM9atz0cURmgn_NYvU1fcZs13zBgCNNPJtmYWD87DxNUdnq_Ixwg=w296-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r5A5fw8FIhPu99s97HPlJZ62HYQr_W9f3OHl5FUVHBzS7LffDWx49_KfxqjPxtUoCU-DMFNhFruIG2dumQAN6JFXvhCr-4vRnbKHoEpjffXlzVOXdYb6iPXeY8906DsTX7ZzGXg=w61-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aUS8Yx6TxpeExkP6lJIsa8jgaheLbGM5YXUxG0NPO7azivtKFFszRUlFdMhcGS86RuzavkvHQIJ85nEcsh2FSr85vi8JjQwQi9e05TalM2REsaytLd5jLXuGu2sLVcz4fApi2Rg=w207-h101-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Repasemos los elementos de modelado para
el Diagrama de Máquina de Estados que
utilizamos en la cátedra:
class Class ...
Estado Inicial
class Class...
Estado FInal
class ...
Historia
class Class Model
EstadoCompuesto
class Class Model
Estado
Esto vimos en la clase anterior
En esta clase vimos:

## Pseudoestados

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X1Qz1MTkNyDNq9qQVMtNYh3Z2heU9o1sJAzbX8pbEQy8hEqhldmWpLERvux_JBouVVaoepHL_PUcQixAqdiMC6qijnwF8p4Qux9exV9OMrekFsd2wvgi5T9Pg9An3VrzXA1ZvwQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VHAfXqEgRwl3LD-hJQBZHJiHIpbKghD6uj9MQMISWWS_izcJ6xzMOPgY3y9Q-qLno2wDahjfhrQGovUP_v0y2d8b38ajPtuUVCzht_w4ayKGTUjcbfw4WipPZHMCL-lO3HeCD=w333-h400-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KUtMgOsFOW4H0FMbjJr5tp6dc1WcDV5_q6-jIIdRoAoeXR1Gbs3eRF9WzDFtWV29-6uIwMCanXJGOgIU51SyO6VJptXlfpwkoDPZ8O2pYOIx0hls7mseiM-c8e0rcSGXKN2oiqA=w614-h333-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1S0exz4DfSDPi7aDnb71wd3uUJ3LZO6uKX9TerxShjptIA4F5uUZ2pJ69e3drdc37V8TDCoW01knt5n2mXLdU1katqG4XhVdwp-GzMylmcJqt7r-vcsgRWStnKqi38AQMqdcnalg=w360-h291-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1W67thUhppJBCZQ6MxggVYORdZPMCzfyXP2Ff1bdGLztk0GCFt5La7XhOC3Lyu4SqnyXDI1ONUHAbARxh_pS2YUYVZGhbvKZi09u2xSPcgck95gNX7-L-vGQUXFxaAluIfcGkmaw=w477-h396-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ELj0nobmoaJCdPNqXthFeXqfyde-ePuUpXFESRzh6JEbD3adQmaOFD_6L7lIrpk7aa6Fj18AnXcd9i87JnWebYaCi7HFig99-CYFtbSB7ARYFOGlq5j6D54yZJuxRdxv9nm--=w1280-h788-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Algunas cosas para tener cuenta sobre el modelado con Diagrama de Máquina de Estados

## UML 2.0 tiene más elementos de modelado que los que vemos en esta materia.


## El estado compuesto se indica con el símbolo infinito en la esquina inferior del estado. Para ver la máquina de estado contenida hacemos doble click en el estado compuesto.


## Las máquinas de estado dentro de un estado compuesto pueden no tener estado final.


## Estado inicial, estado final, historia y Exit son PSEUDOESTADOS.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3KBwynG59_etclbBkV93ndhaBok3vBD_mFu8hlnpy4VYUm82oohweK-fbZ_xhIHCMEjjzrgMOEkaxe_o1j4PpMftzcdBO9ZjvSNbdQH7BYEEDNZO_5PKxCUkvILFLJRCKboRza8Q=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yELVvh4PCUILhZep5z4QnDsiPtQFw1fhowE7wgo6Z5O8fRiH_QaQZHrslKnRSnTT3CX9f64-d1bZI5uu6lfnO8mqf0X4e8nUYfUkieQ6ML-kRSwyYWFmEzl7lJ701Oi8OkhZG=w1280-h188-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IDDE6F11GxxHEenOrXd1qezcHaUMZPnhv6damOBRyN8ZFY8zprPP1Mc6cmE-CkJKHmmXuoVwQP1KoM39eeXHy8jo3xHgoGKE8dWduG_WwJoNrzKjKB-pubotbTeJU1rWYY2gd=w313-h161-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Para terminar, recordemos…
El estado es el valor de los atributos en un momento de tiempo
No todas las clases necesitan una máquina de estados, cuáles si?
La máquina de estados representa los estados por los que todos los objetos de la clase modelada pueden pasar.
Los objetos NO van a pasar por todos los estados identificados.
La máquina de estado de una clase se construye en función de uno o más atributos de la clase.
Mantener la integración y la consistencia entre las vistas del software.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pbMwatafi2dw2WFH_TXgxqrL54OqRng9RVPZSiKYCuxmscZX66iDQ7I-1_MNX03pzeF0afw-Inkny9YX5iH8vuch5IeutEPEZ9zYgW4GBjPkpvExlWSOeMZ-OiQUt0zC8JQhP=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hYao1UpYVZ5Hxd-xHqllfCVM62rm81lu5Mc7ZCFt1e7l8ia2Dnyu5GXkQDvd2J15WtUuu4Fk7ENk2pi-icF8iSo8PiqKzoupG8olgYjJj8xduzowaMHHHe5iaDB1_TvwFZnU6Yg=w300-h200-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Finalmente…
Muchas Gracias!!!
