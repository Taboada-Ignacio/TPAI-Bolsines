# 01 Modelado Comp con Diag Maquina de Estados.pdf

Fuente extraída de NotebookLM (`DSI`).

---

## Guía de fuentes

Este material educativo describe los fundamentos del 
diseño orientado a objetos
 y el 
modelado dinámico
 mediante un caso práctico de una pizzería. El texto introduce conceptos clave como la 
identidad, el estado y el comportamiento
 de los objetos, utilizando diagramas de clases para estructurar la relación entre pedidos, productos y facturación. El núcleo de la lección se centra en la construcción de un 
diagrama de máquina de estados
 para la clase Pedido, ilustrando cómo un objeto transita por diversas etapas desde su creación hasta su facturación o cancelación. Finalmente, el documento busca que el estudiante comprenda cómo las 
reglas de negocio
 dictan las transiciones de estado y cómo estas se reflejan en el diseño de los métodos del sistema.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3i2sOOaXfnLGBT5QJfm1G5wmFQuwUcpYobmAqX0CC-m158BQRlhovX-u0QQidT0oXoH4-wJBTYLyO8Nojnq9j7ZqMXPqorCsCcmeL3Hj0OLnJLkkhwhPvh8JUTgKiMDK1Djffs3g=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29zRNv3hkjZR6gY4pdduOnzjxSI0Fe2h-AVGdFI_G05cRp_qH8y-0X8N3JBn4Vsia7qBR0bbsBkvLGDO9dt97jb3PGp6-dajvtnjt7ahIRGHLGQFDT9BQykuN4FxPrGinQOd5DsQ=w526-h154-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00wVcBtoe-BOL7xc7c_-IAuFr_zftH1PHEhnzWvU3szQ1ku2suUD-V_larVmLryyRWUVISkHO_4sa8uz4vaZA2LhWioS5nsMBWn99WyP3B6QMTGU637g4AyKZIIYrQzWR5dla9gQ=w1280-h336-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Modelado de Comportamiento con el Diagrama de Máquina de Estados
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NQBzjwl6rVqdaBR70-sHey6HL4fFCsWFTZHDvxM6kTa7olCArzJK4h5_CoThPAWdzsCV-PSFvhXVtYLPHYL5fSANzL5xUbNq0hsiYLk1Gg8Yi5J-i-XYv_YZaeZ4l0iRe9x6I=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2c2br2TYv2o_ENL_vHeRkqKEjQ4VAgU4rE9-lIl2zdfZW9nXAedvwts9QSyCPAZJHNBe_28xabVbuMh0jZYB48vcAM9o7y-aLebJjhprwgxyoTInYRXcx0SiymeCcsjDE96DpwfQ=w1081-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2R4ir8A5fxKF0ztyyHwwEBIbgCzj_faTFo_Z5b2YjdSo_IzWKwFO4Erpi42kJw_x19jY120NLKAxtkFgLoIjhK7bW2bMF1m7jSkeJ3swbe3l_MfnltvGANZbt9S3S_A48QhSt0Rw=w226-h603-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AMglLmfhffRROC1Mg4CFoPSkhPlvJMvybiGwWhaMKM4H98CYhmYPoXzR4w7zKAjPlHGF8-G3ildrZwujYeSv5FKElKbz77jV7-jSIb5-lmtLenTyq2ajea7E5QQ8xp5FM2gAY=w892-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TOIaZQB6kZB4gz8JCsjcu3TTC3NBdt3xDn0jNmgcaMiCgXzML6cwUivsLoj0qvnkfcS6hgaDNFVABBIv2KA3yL8GgWldVysgAPcDpuDTBE6e8wj7sEqJYzUvuzDCDwmnAg9qd3g=w226-h321-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0gVu5JX5fWULMkqvZz3zLDcq6ApnoRDiWCCAQk21YbRGKn4EYSVr0wNl_5N7m95QO5EmRsl3lZSKBFjuqAa9APxCMrD42g1cqP4wlNMpqUCZ-zUa4ftfGt_RiQWc_teE_JhLIsig=w1251-h293-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2r884yEi_4gY9UKT9H55iGjF-6HeFH9tNXZ1P4Y7zpa9zhT-SNtmHHu55fvwELtpgqHYsnuFY_YI_Mz-CK3K-DvXeyQC6HaoB5LxnB-EDt5tzdcT5GFkTA8BcET0hBafNCU4-wzQ=w1255-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv22SRAhbc7v9Cp3bQX1xSO6serduMgjGo5wFm70BGWhpAysh8pDmknItMlnrVKNFfVEnoykWGEqfVyv-Dmhy6h7j0Hx2Job8LkovTU3vRRLutXyHu1W5aa1Y-k0Tv7M9F4g4INcRg=w226-h321-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2T1p01kHFf4xbRq9OZHC_F5QEsqr_SFi2ZiM3HuKHmQ3GQ0AwVvQiddoUU0u-5tpQOnySYF0v609d5OHd_x2hkRyimvm5bXgmGcJycGPPsgRJ01PT9JacNmHtACQ6EMVP116HX=w1270-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Q8qLKxS9IcsAqFO2K3SVtGaHzrDsVU_8s_bJhA7SRUNfQLXJbxZmVWx1YQBVJmPPlk6MT-SrBdYd3QRcmWEWQnw-JbnVemEU-z-VwuE13GXnYcxQ9IgXHkd1WPg_K6h47MrWPOA=w226-h195-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hIOp4jsxPMm1DEB9io1uNNzxkWzXg_smOWoVsAaB-8SeXiszZIk0-6TSlrXOEiJf1YffGm3zP-rscleVM5zNm-wt6fvDjUwW4E7Yuix_9iTysYyolxjr7n7nRdas2o36T9y2u7Q=w865-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CDTO4WYb4r62gqGKvxAnv8BEnpKQw0hzLo2SmjDOwP-cW3SVELpgql1gd8nkZ5TwG0ZVJ_N1FGQ9erWJbArlvtGYE1XcJDq74N_4bJujws1L3cSaBju4WMsblzRBsu8-xzYRPTw=w226-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1CWQkPMQ5RYhmtrG_5gxFygMZQ_Jw07UN_Oukhe-fqP2SWk68zXvkPO9UAkvahBpVIXzZ5_ipnxn6wKfm1Ehk4Tph-E3-Ad2sMvTlOdlKljVRuCy_mAt-GLBI0XLDSTLQfcPTCyg=w1274-h292-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Wt-np47T14bJj-O5yqtFR8iavV-kPUsa3lomXCAiI6mSx8FEp100kliUqntUl97-S0Eo51HFXBtH2qI4KJZlCpoRmSHQdILL8d0YQlB8s1T_yp2lXhPAUOAN6wUaVKzibd3uZ5A=w226-h165-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XsGZTOWgpaMg1Z847tBzLeOAy1OPjkhs6pTCE3iZER89o5BKZpP3G7ixP6Wa96XJB6AODsnAOMISv8ySoN2tC__4pG3FdF2sFzj1t12vL_DszdLoYT6voobn9c_Bd0hfdPId6_A=w1280-h289-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2y5oLHj2agFqvQJlN18Buob1xoi1ZUUJ2BsCRfQGvxkufGgqTr44Pgj8trF0mSUsTgOD0xEF-8dt66FAblY8vTxrRcg-r9oP1k_oo3hOQBUDuz4lh1VazbP8TzGqq-vzjxdq7a=w226-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vRlsXzIZO3NLnM1QtNKM4NlV7sPGXTztIQ69-idycOzz2PjLqkglt5KSJJGtCmfTwdzJlNGqklSImawjZLz3uQcgWVtTYfAKeV6IneWMC-MacMY_AZIo3BfxAtZYhIGw71igyzQ=w927-h388-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿Qué utilizamos del Modelo de
Requerimientos como base para el
Modelo de Análisis?

## Modelo de Requerimientos


## Modelo de Casos de Uso


## 1 o más vistas de Casos de uso


## Descripciones de Casos de Uso


## Descripciones de Actores


## Modelo de Dominio


## Vista de Clases del Dominio del Problema


## Glosario


## Descripción de Interfaces de usuario

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VMp9rXbtQ4IDdTheRN-1BYckU1bxcoXMd6JlJoWiQYSJj1GtMIsfA-KiGx3V7XswT0OJsU6f_MdynJc1USPXBjNN-Rts50QwPLLKbo1ndw632VbN3yn0_E9YuVeD12KrAEIvCsw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2gcYmYHqFwzH_KXlwdYB2lvTT_GSiEiDCmQTXOKH5Ey8vOW6ZZA3gK1iVOR9FH0btH-97ZSDgUei3MacDYE87r_qZ6NFvT10rlWM83zIOu0epyKw1YKkm9IkOcvBLj7mmKAQ-EFA=w1246-h1140-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CBywaSxbkhf-ZSyYM9ZmeqH66O4G9PosNxAYzzRIZ3wy9dvIjPszKFZZ0Qp1mBGU-jPQ-7T2ykZMCJuW9RI3oDSUcgQyyCMmNdcREgTdlIJxK6-K38iuICFW-Og9g47CTwWFzRQ=w704-h440-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LgcGeCiSh2yP6YclOjWK8L4GGKbWtlryOC97df3SjAOTZ9TPRBuGPJkML-9P7q_wltVtMAf3KssotawE4fKtY_KEJ0nY31eGvvobGe_e0yrDt6rxaPA_VzqoJa6VHw2eMpRti6w=w840-h1018-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Workflow de Análisis como proceso…
Workflow de Análisis
Entrada Salida
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28z15NxbVM8UaGkaXiLJbxJj1Mc2iyVQlG2kYIr1Qm3Y7Mp8LaHJQ6wR7X7XsztyK-7l64n6mtksPBFJGH6mZXXHKqWH0s1sUYRpImc65unB5MFl6aUhRpmCHJqfr9urIr3Jc0=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3IqZ8f8dCN-Dfd3YrMOe385Ghd6rNOb3_FHfWNSHg6hnKNtlImqecoAdRPslhi4cQhhT_qiVlpDeXDVWHlZZR3cVMoI7NkT93yR1Vr1CGzIjibcuJfA3HrIQzR1ht8NfGZLrGO8g=w486-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0iWHf9FWPFro3V9bIhBgN128UmI6Xm5qCeZw8et0u9ctC1aZKKmgsClRLBfjXiG7xdJraoS_9fPx6_seSxTgCDmppPkO2WG_9eFjzUHLPpF9M8Xq8NoVO6FnfYZQBD-8AX2C_XFQ=w194-h669-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HujJnlX4dxeI3P0-Ucv0uT7QIS0BYWc_028ksfw2pSTyCRLjKW3n-4BdleQcX8CseaadNoqaGrXfcUR3uoRQNGD7clKoWr_dVLsJnHRWgUNtqH_4chK7T2rQKU7_E0kPEnzXFVg=w746-h357-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3hd1letEdOEQz72qTqM5tVF_gn-qM3gw5kzH286749yic0J92Hk9USHz8eYzOEMXSGSUvaqG42Pv03aC9WDBVnURwgxxm1QVKlHdu0pBulx_p44-8pQxJ_2SH0b6I4a0OX9pWuXA=w194-h208-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fIHZRLclLy2r2e3mJTuhVZxbGx1RhvAy7utW3KP1ICHa7cE3FtiHj15kI_Lf8LH3SCaqNRQumVd9V63HJDr9_KTP8ggF0T-j_re1lLVlXYGf7cOpJ1C1fJb27pUpQ-EqGD6m2=w1066-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2FyVZenuLuBdQ4sTnylP9_jZCte5L1i6I3_Wm2yhdiwrxuhJKxGVAcmRsekB2Z7ObqoR-z9zuGiwi9_No7qd0r-HvMhYBL2yl0tp_pArzLgka_4OsdwCAhK5IyROLDtjwYbSSDcA=w871-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3UMRRh643QjvGuChqC86XY7oi5I-jZ_ARd7vUTs0UatpxvgAS-fNJ8knergulRww4HSN-S5s4MvB_DK9izGTEFaP7lnhgKFL-PZ0U0AUimDvI7u45beBYwpEuT5JwPf9rouA9Q=w194-h208-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1q2QdXu_eq0Oa0BJeo6a8ugFFB_neLwBXhMv4dywLq_0pFq1mNPzR1rJ0I-gAuDxHSLCLRjvaGR6CmeJc3Hk9Y55mLq3RjIxcbD9PQOLdRNG0LP5lCLba7aZljWbxlvOctKxxrYA=w1069-h252-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv02zCCUi3q6Xg2uCew-E4inAvb-WySNly2Al8pR_1pa58_3D7V0gqzNur31HTkkXR3oXI-lcBGTkc73Bmx5M80EhV80JMpCcOE85sVfaeomzRXVFf_TWrbalm2LPVAPsbSrN4R1=w193-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23_VOtDg2Hwl9FCGC2zfUnveCDTRTkHbgShiHQhdKlkCDE0K39kp7OlQDUY4-iFjgkYspEf-uRnfOpxhASxONSjGz51IRHvqox6BP7GdYBXUoqsV58bK1QOsqhpDQRA1nsXy3H7g=w871-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YRaMGahtrHRGYSn-zEABO5a7r3t_IKfEk36sqORapaePjHE9NkjBcOpfJZB6fAGBzMmQRkgpWE_Qhw_2a57VdoV702K05aMwaNv1LpsG5ldVio-bjqa_5ZShiTMKL5DwwPKWS=w193-h142-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv29HoeqmHI6MC_NVm9RxwMtFHsCSgAJGAlNKmCDMglGxg5pWmP_m9fcDwyFXHPpVs7jzyxXbKvEGrpy3jTckoLGcRu9fC0Lrc29wtOsXBpurV34K6N6Hl24gptOpI_VqqpgxDw3yQ=w854-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2I_KXA23XXNDYUaYt0NjaJVaTEURpJghc0b1epOAJTYlzmP80Sk5mBiTuRqvjgAfHtZtYELek_gcd4I7zlfZSVUgUauUexcZpSquiTN_Dv1Psb19RBv6FhTf-0IOgFQrdS7R_ZHw=w192-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GdXP2Zv_0Cr0yyBJMtrRjN2IQ6WXl54NOJE1jNAXpKJE7VdSyAXyTggJzCvSwIoPUYaI5GTWzBEZ6tg7ildMd7ORiOXUVRxfwxQzqOBUdapQ1TU9wA925KMGAyJIcdzgyCwoAEw=w711-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3-iFaDYVgrW8XCdrBJv9H-swW-w_T-_AQj_a4qhv4Rxo22n-PH6M4z45mTJPAUgPDAjvs6MQJ4C1h6riTgsKLAAK-Pk4upRSNo80KocYGwp4fp_DJVVfQCrp76CmVG3cguES4T1w=w193-h142-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1x36Ei5_GX3j7hwYlQfcK1SWqOQZBgEw2cIluHZ7FxJeG4zJSQxydG0tRTnE7qeDmPqRcxOVgSz-1X_TQgU8ZJkYV3-gN4aP9Poznn2vFqQdU8rMxWMsNON85h_3W7LMj3LISF=w1208-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fepOBGOLh7RvLXE1j6ilNTFBGnQeDuXmm6760velgqUCshM1FGDSeSoLjkl5d58AuA9HWwylznwrGTRHzBbMPIyCteTTv4UAsbub62dgUt-SMCPhJ5Rip1Uw71LBSyMreEysc=w193-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CS8iUzThDu80dRjI5xc2rwhCErucvxDgTfo1oEYrnKNiL3sGUMFIElAufVOWwSjfH-Xk02kq5jxM3tIpZMBFl3h_blINyv4xrEb1p__OplFmuA50TJQJQOSfietl6L84ActTK=w1267-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ut4ZDSLszbcV0InaONgLeJgvUgv-LK2PLUASvtucTC_lhqJhhE_DCqK8-iOtKxGroSUoFPj0cy6p9ScvE8AYvSIVkISK2PBYAIKt5_4_nWpRpDbRK7klxnjOa7pRrVC0uYUYekg=w193-h342-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2OPdt4NaqJdbBGkQMKr9oPhpH8XGhMXkO2lE0zO5pyd8p18Cb_p5ENNdaWUwDB6hPxci_9cLqfMMbYwpPfLV7EeLDOXkqU-OXLusAbUag0EMGxmQ4RLgZVZYMXj9ghjngXEpMz3Q=w756-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23Q3nUC6J-7ZoH2EgBNYROowZWDYa8nU8gRRd8Eig8MKuwub8_Jp7PhYh6lnIUkzGx5UbMnftULidQSAAVx9laCbcJvxg4VKHfukfB8_mVAcVCFljsIvOQSJQfGCtVGJTHOnRN=w1257-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28a19hYBPga4RqbAWkDjhGrdLzY_b6fDwWxVdTJDMiHyJBY15JRFdHy3oIT_xnP1D6ZtTlT9UEmDL9WyC6tisFWI5eChHKE2MRM6ug0Z9JsYyqtnVfyBmetNxVMz3ADlSCaPEz=w194-h649-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TR8Y5I4novj_PYInQP2LDjGUb7Z6wDnqn-2kO0egmpWbYeXyeDpXpp6sdVD7HpjQaX9-Zh0aY2DNovu2o6wpMHcTi_FEPj9nrptSznz23YopylzezawRldgxJztwfltHHdRUZvw=w738-h333-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN

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


## Herramienta: Diagrama de Máquina de Estados


## Paquetes de Análisis Herramienta: Diagrama de Paquetes


## Descripción de la Arquitectura

¿Cómo construimos el Modelo de Análisis?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3tMbUcmxqYCnEQKuZLRGpnif0OcqNYKc4yKAypYruGKhVacoJFybBQxCXZSyVqg_Ov7_wC5VH_dpxpHSkTnXK9fLvHv8ZPBEYnvLNFf19WyxZthDwQ1WkAs__L86JthPIQ6bcqlA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3AtPaurOT-30smRVEWh6TYSGlQCe6GobN4RpINYx1nHlRJ6hfmbn4lvSOeG68xga2zBWeqltYR4-hbFjBuUPLN48tjvg6O460oQQYRLs_yCqo5eNPB8Mqq8Eal0-ujUS-NeEBRGQ=w486-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ptE3FP1jl6N0sZyb4MWoBwbIHYFRAmrwPHho2T8a-CkyNpFwreMoC6r4oogoKPbZO3WjrHSKf-luDSCReQcONfC1uaHaVKnX2vOi-sJ7-VJkpxVPYxzUsNca94xdr3dzAV4Yl=w194-h669-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ruea62vPgnrVZoeY9BWZSdHJVepki88NbRu0QBTxaCTEaxqbMc2f4I_LWYjWbUBLeX-Zh8POlwoBDq3B6HDAoPuDT4HJ-Jk2JV_t3WffA2HwvVQPi_FJxywuShAntqse3MU2DOQ=w746-h357-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1giz5I21FaFGsMBGdzYo3GmUmmwu6SveYXBGiAGwsVVtQHiUc3nlKr9QaF5299MM-Zoeo0hMMgEdxbrCdJqsU2aMQ7L68fuWYOF5WQWCDmwvPlhPvVVV6C9cBv0ifFnmpJfync6w=w194-h208-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nppSSrDI1c7S2FvYqma8mNENKkonjpnhI4-I-f8GUH8ladCztGenswPsFgIy7ibZ6rF-Uk6Bv6y2LagmkXBsfItMOtqVzM5qEHOWkg9SxL1eqF7BT7Lt6C8EeWm8_L-3f-lcOsw=w1066-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UGYIqVNm77-XmjEZf9O75hnyuaNGFe_j_FZa3HNTn2Vf5Gu3D-MjgIP6gdU5DGNk0QyL4AnpqKo3am_X_whvK6Fd9F0GxcuPUkjE82A7HYjkMj2EgLyo0MEcxg7V3vCxMrT2j=w871-h272-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1K83vcGXOq8HU4c1h1p4U-sV1OFSOUaY_XV3v531OQSuiuDnc7zqmz9kwVJHH8dR2gm5lDqRyfBZXEvwH9Ytnp-YbR3RDPDh6owXn9MTkb_ISKg6wUQtaCjFUXu7ptxF8RIPKagg=w194-h208-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WNeURhCdbesgc4UC0brx-9DHKcf86x9NfZObZTV__ck846NROJP3GxNsSt9QspnXK0DmNabOeud2813IBnTonSL8mvCUZ8XITTHTw2VX-ifE7GLEMpwUF3PFQUMjiTixwvEEm5w=w1069-h252-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0s6kwvjcga_uecXjyR55EgwWaPsikhMRSU32Mxx41Rxnmw3kBkdQXxFtWiP1cngf_gyAj768Q5YPwWoGVxcWM3C9Ch-bEdciiIETh4-98WjbAkKLYiDm0P_VQGfUjjFwjLrmrG=w193-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0nSr9yltP1KipQ-EFEEK64gclLa1vp_u_VZW35O8y13IgX_HQXQAMJUTfXgUacuu5Oo-xBOmNdHRo6rmQptaeyVDU35e8eTuAOBqVixuUghf72ZFS4NQlZ7-QBdTfZvqEvAOAUDA=w871-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1clW4sH9mFb9wTulOU8gV3Zp8vIEmty_C3sQB6RxQ_vsZ3SzFZnUumXW8x4EsmcY-dT_j-AZ3u_i3cqGRR2IUGy1IFXGYdRzaPvntnJntvU4hqjN6ut-FUE2fG9SaWteYdp-fe5w=w193-h142-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZxGsdEQzpeNPuDPWWX-F6e4VUXYDbDDvy_VYiK9G2aci2gphVKHexnZVJIw38UVMGb5QzDRTvukA0vuLcFJl6u4EYXP5wDqYIsQn6xpa2vJgZBs9DRRSfHi0QgqvoggaOo-zmqw=w854-h271-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fBQISW9-5QChPpQyYwP1Csyt-VypgddLJ3p1sH2B9Jkz2MF3RqAIfbuy_aNMHtSU8mYREpliBFWB93cg7Dq_fokzh9DMHHr0QcvRYSlk5X5Dkngt1TcRzadtm-A1YaMVxV1do=w192-h73-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3cBsb9UnZuIpjAtgIq_kh3dway7vq-pU0tTxOm7BJ0ABBeRUyWbUqJwHi9kDELYDBZTRydydIkT6x5YmIjPc2_M3sf_uq4OL-jM4ONCt_6cUknlhcVgnfmiZHOeI0rqbCy_wr7yA=w711-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv17vMgfnUATWZMMEt6a2C3cu2dq7jiZI0uhAUKUpzoxFTvOlNE8dFw4Rr2sA3S2m2oL6sCA8oWuYsC15RfJS8mIbKZl1UZ0GCYaRsP_WlDEb-bFbshboXML1fw779awIYGcmptH=w193-h142-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1esRNgpDKhv_UJf0PmoDMKHuFDIfHpjQk2AV1Se4g2MU1lysUlx0De3GLp2vc2ZOmdVrfU5yrLweQTAzMLzRPo11fWUNxpA3Dl5u_bYDRU2Oaq6jdAU7WsFuQm5pLqtS_TVvdxug=w1208-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Y02w6QFhVPjF361OJkAZVnDZRXa2-ykpNMNxDVElSfULmDz1I1EngWCv8KdWEe53xAxiOVT6bA7Li0q44Yzs1gykxROlxNooP-lVGNoV-bbUgq1NTG1nc7wdvnC-6Y7DLIn22=w193-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3s5_yw79MCwUV0cQMONZIYq4GXVBpvBagR3VEDSPDV53wTgh5uZzoPDe8HXqIAnDa9Vtq_asn_aFREVLG1aVyzYiNA4r4zzNL2_KLfJsi2yicGqKzVIyw1l84WKLjVs_WIrfI9=w1202-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1lKydEZ99gCa39bPVvmCMaunCi83LXH74nQrflQYMDT7Aste8A9rIbY_xYHmEK_qi_zOoq0e3ZpQyhId-hPvjCu5ROCCNHktl32329PyYV1eANNM5egxK_Hoa5ilcIHLEzcTUbAg=w193-h342-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1kmqTsVnwGmV1zyMggHXgZyL1WpA9SgFbPQ2ESIcLGsYIHb71pY4ywicBnnh0kfaWZ57bvX6Sgven5mdnSSHnAn3nn7Lm-C386XS7-BeTRejbmWWM5LmM0HzliJLIhChtS4AYi6A=w756-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3mTgUTohvjmPskjpHGh5aQ9JZng5L1wvE2fMaQEUrh8j0ev62Y3OUHR8xnKiq2t2UYqf320q-BKLv-Nt8gy8ImCdhA1Ew7Uoqo1pQtWXjlF9oc-y6Vhid1iotFJUKLpBvxuYauHQ=w1257-h251-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NYLthPe1QDBuCNeDUal9qwjqratGl_HydpvnLgmsWeydT8Y1nGBQsmXyTVSFw7QFlLehj3o36bPhyjSVAXVol4mo79h8dZs78UzRZrTTIeNB7zaqKuDkTPoBljL3IUZxNNpQqJQ=w194-h649-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Y_1fCaxkNgB1-KZzqzWToJK7TOSsSObaJp9nXOnU8bi5RTHZxu6YRNIrspPuT5Fwd41Sxk-vQi3pIFJOoHFauAKlH9W9jblh69vYaLanvHnjpVYRqnxZkcBgDbWlW-2bfw3EonA=w738-h333-v0?authuser=0)
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


## Paquetes de Análisis Herramienta: Diagrama de Paquetes


## Descripción de la Arquitectura

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-TOicJzY6GwpNlWDWsh0iveC3S5lKvv4Sd96dcYZt5tX2fh43FtiVcogCUS8x8KFFpjSEjCYEC786w81xp8BUVTrEwrHyCALaP90sPwaOjcdUZ5D3szGqksdJjaIbGHT6nncPCg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23elodUaAPhsteawYWCaBJ5EQcLYDkDiuI6-ISTCs1wTjYqDi3CYYEX_Vx7lQt98XLuOhSAzO6NkV-gV0BxCAtEskcLnWhR5Lnzv7WzwqLQQ2XJgCEMunstSKl4Khg0jgTEw8SkQ=w391-h108-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1XX9U67u2gduz1iikrDIF9DcBB_n4XokLD7Dq87q2S9nyMXzdeB64fnDR4oKhlSmjguaW2mKGLwUryCnRNa2KpxkVeHXfvuEob_ncELzSFYGhb2deS1bAkzVBBKlZpqV45jfEOuQ=w759-h128-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CrgMrohkNqUF2FIcjs0hlhT7r5YF-mYQkqSsKek9gFJgnZiF7T_0sswbETADEzQ4e3KXtIFIVu8WE1O5_6HKbfO-doYglpQYpRZWlA81YfqqGWuvII4Pr8TmT-ON0r7IVNOk7UQ=w585-h154-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20l_HUmhrrp_X810xxSsv5559srYXgB-bbwy-iLH1Ds5M9qv4d0CwYuH4jxnyvqGjbZIeJ4IuE84Av46o9kUbCPx_2wJLzPEWBWY5LpNC880iw9wuMlyxNoJ_IcSBloWn8JfHf=w1280-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1xq_CH_kED3e195xhCetS6inRZZOSxJTKQOE0EkHN1DtvckMbWtfrPwq1wnrjX8xQYdoUGckqIyByuUr_H4HVTALbYP-pv_oHqN2IWH1r9UNjsbz3E9CSnzr0f6j5tUieZQsx_pw=w508-h362-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1M7pvELLaq1StW4M5IR5tUCAKl96482nEooOtz0SGIAUrel-KJNbNe1o3mXISnlIMOrx5Kkz0H2TORd6qbJ4sh2J-0RcaVbROLsLlKX4k0yI4dIJcVxZwV2sSWp8pdWFE2JJqQ=w580-h430-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv39gQdf1mZRNCYg5DvbPTAndK536Ls49vs7QQsOCJ6h2VkJ3YesCKl6YEim1hIHN1V_Ht0gZiJf3AblNcfm2i1WowJHIvb-4eudN4FnHUbLx6wzzF9PxB5M5gueuT6sSmTZqXp-VA=w317-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv12lVjqUq2pVbkk3fXvuBe9ZOO1x44bEs6xB1k8Tnfgh0B1HDH1jDhJ6VFrGPAJCrez3yWKoxReAakp8cFUmhMYqG_cCxXkoQD4xXYipxmbBUHOjkPjSLFROdhg7r33ocJGSldegw=w346-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1IKcUUk1W3C3B8QShAstpMLAdL8B-shdshFyWmhY_uGj4nxi9mi5u7tcLd-JI5gRK8YqWLB7e_Wjj6jkiMdhs7LhFJfUJeHOPPGgtWVzYEfaLsKCdToaHfA6eA7cdEEJVuT6CvZQ=w318-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YSPbdbKIvo2GYj9UEGzIl-nB3z8SAuWcVtk4dzJIpfjAdmPI7ql4vBfuPjXA3FMr_CItyTcfS1r-LIjX5KYVnAtwJPfi67PBr8YjGzeHdsV0pXcsE52eOslkPDRp90JCZwOtm=w318-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gpO3FdmYRWwa_fZRdpuAOfA3D5yNXzftYsWbKKCNHusqjQQkTmlLSaivik9BCNi9SYu8i2nSPo4qazyh0euETYtSdaMtWMYsrxuHjqiFS0QBLXtEz-NJ3Yq0eXl4y0LPhHMFm7w=w317-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13jLytyxLKjuQZs3eI69U0SSEpyI_3FW_0GHSvVWb_oFGyfpeykfOsxcghOyk77E2Qol4HWYAPS6ZxX_yBKVY01KJozsro3BNA7AYgRQKe9YAAIdqxSFbrD039NwONz95tpkUhQg=w360-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1r2ffMU-NagG2SoETZ0ihbdMUoGX9QLKXqH9RgS8y7gHwC2-GvaBddWDzL_eG4FXCNdyZ2206Vj7Jh56zC4GsGJHfdSenmevGUDDTIphDRluGZnFTRNW9QzDF5j2vDI6R9uu-7tA=w350-h209-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Estado = Atributo + Valor

## En un momento de tiempo

¿QUÉ SABE O
QUE TIENE EL
OBJETO?

## Identidad

Comporta miento
Estado
¿QUÉ PUEDE
HACER EL
OBJETO?
¿QUÉ ES? ¿Qué lo
distingue de los
demás objetos?

### Clase: Auto Objeto: Mi auto


### Estructura Objeto

La clase AUTO puede tener (atributos):
marca modelo color dominio añoFabricación
Instanciado de la clase Auto, lo que significa que asignamos un lugar: Identidad y le damos valores a los atributos: Estado marca: Chevrolet modelo: Classic color: Blanco dominio: MBO056 añoFabricación: 2012

#### Comportamiento o Responsabilidades


#### Comportamiento o Responsabilidades


#### La Clase Auto puede:

encenderMotor encenderLuces avanzar retroceder estacionar obtenerNivelCombustible
Lo que el objeto puede hacer lo toma de la clase, es decir el objeto puede hacer lo que está definido en la Clase de la que se creó: encenderMotor encenderLuces avanzar retroceder estacionar

### Atributos


### Valores Invariables


### DNI


### Legajo Alumno


### Valores Variables


### Estado Civil


### Situación

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0XvcpgUM1BBscUjbD6NsVHxjz5YXcly0UiLHOMZL_cVAm3OaY-JoZJao5xQwUJSeKNU65V7HzOstheMxnMxTs6DiyxMh2PR6yY-8WPHroOYTuMqBFB4aLTZsH4B6Hhncjpi2qOQw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1nmpRM1VWFkoECDsNJpEA7JehfzqFf7PFm7AjmDJPjlvuRNksdw6UxBsSUtEVjzGjcnMBkqdcuDQyuqBM3LEEg3145Sc7LLxI5yFM9kHe5Bw-Wl1G9JbcDvh50GwuLvj3Zls7I=w759-h128-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv33qbKrefVQzbA8L6gWKiPyMUUkqogB17go_2SVd5_6X2lHvuN2cRBk_KnsrZlZlA-b-CKhQgCiMtol33XnfsW3AWEdMHC2FI5NM67AjY4pTvYuUQqCTmmn4f_ZImjgpVf81JzK=w585-h154-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv00R6yIGqh-MfhOkKYvHArLDIxThWDplXSBn8OZhkWNMigJPdaqPI4QCOqY99J1TmQXIVH6QP_SJLvRW_7b1nQCD5JngapZU16r4k8BnE7a8KvlNgFpAKoYZCOpcWerphGqxPLskw=w1280-h80-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Iz7TXhueYANbRasYbyaY0XA3MRDWtEjPyG16mO2lHEKnAzuY-DLPQnKbiJPjJXiztXJLGGZjkKIui26GJKAuANubIH3iGyZO6BzNt-6Gu4GLaKf8C09Tb1TGbmuDr4ajIHoeKwQ=w317-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3V3xwIyfyyQ37srXHU5CFb5JZ6rIJfNH9ADNncgkKAYitXD5yFRDWImfw55mpb6q5BkFK-PCiiqJix724xri5MKxrmZs7HY6SmAKYww9UGYZyIWHksUqAu-ARkv4fmvxZaeTPX=w346-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0X_98tKxBj6mZEkw_hv4y1OvnNMzvRCgl9IhOpRB-NcS4Hn3yZOKNchYcNlMop4Hf8tJgcQuoB9nI9CaIJqAS0kT91Nl6F51cR2dDM1r4dFXGwu1wg8SsZ9EM1vn_3bcbnjINDNA=w318-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03FiJjE8fUUg0ZxbIA_Sc6wG0MoypfvUKb_AcyDBxXHrL_kXcpQKoyMe47iZ0cK88JFiFRtGdQmWudvqzFRM2kUDx-ulqw8yVFAuDYLcnnCrkpIeMxiTYa7dHJeJrKKn5q-q6GrA=w318-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv18H2j9s2iLb2o7NBUEtKcnZF56HXjnXwGUDnKkxKtiUrr_B94-gd6vE7AsjKLV3qCG2b66nIUS8KaGqiomE1-C_kFm88REgu2NX1zqaOjhCO_NLRp6ndVe7WYWw0pGerHQZLM8zA=w317-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2kqUZzIJDWda1onBKj4LKbQIkHfyYW-9Xsr23WYmqtrrjK4XdXdYSNTNis0ua5JJkfKr4h2CQ0P1hxVsgPBo71xbGOJthyoSXTRb1cLRZxDcfCZKHvorLNGyeUFwscr9ZjlTMZ=w360-h169-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3B5dwGzIcFvjs5VgsWtw_0HvimRna-0cEB8bS47U3CCepSUrPo7ibRPK6IHVhKGHW8cYDNzTrcMVC_z6mbhyk7vSb2PkTV4EvwjowfuA5-RaP29RIDTLhB8b5rfpwq1ykW4tK4Lg=w350-h209-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1eCgZLUZ8dCn9mw3gX9HmBpjFec4HPfen5YG7nO5t6mBUxZ6avVCcGme_n07KU8t4XzusMqczwx8UM6DIQUu4W-63Nzln--hbvJ0ve4oRnpIcav5hY229l3FILS230IQjvJfm9zg=w1280-h371-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mnZZx9VShQrqfKrVhwg-BoQdWO-tj-W-1PY7_lL_hyjzodl5draH8vcCWXBDPPDp5M3ySIw1fhGyskWj83DoZhFjDQUr8S14oLzLiCGTkjaepf_ubi-q3aLiB2JJMNhrCIOd1Qw=w308-h164-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3EeOArlETW_AlSeYdb4h4uf-iMdRrynMc4VF3KzQFQAM7ijA0f51ijq6Y7FL3fnDwMm-iZ6WiuWBxr9JKpPOqR9w--G56FhT3IreMp3Sh3IbDgTHWDP1jKIxDxYvf3j0PjvQLU=w358-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0z6TzBnwUgNmEMUkmS4j7rZ4YW6F1Btw-8RVQD9ky4SHm5H4I4t3u3isQj0uqk3IjkDovyxh36ahYJGZ63QyjVLN5kM0t52ZgOGJMYLsh9K43HBWPwiB8MsptjSlOzbekRy98kkQ=w646-h163-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3M_fqNpA6KE_TDy6JLvOLZcXOVSZNGTeskqeyF0z5Tf-LgGmrseIj2S7wrog_ndLisBWYnvHXJcK4CKjww28iNdJ1IaJsZjcpr9rSe6IBcRtly4CinYpU_FV3DM9xMdf3cSSQ_=w643-h164-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0V2hdW4bRG6CUnyyqgoS6gUkxH2IIicaiBYDXUd9mtZuvcD51GnFxHcPBvsn425ElSVb5c2vo7HzXw0hxJHf9WLVZeb3eh3yMDYnqdrSttGFqX6qt1stqfbnAca03dBlwySdhU9g=w346-h181-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36vmYcl37mGa9Kr3YNDT-tRONdGBNOoQL-SWsz1SpeLk2E_Kuzoj_kNSslkRwGw8V5lrdzMJvZl6xKJfFasDl-wteO6UcNk7DHPighJuR79lfoh3KwNl1A1ki8DpC-l-hLX1XkYQ=w633-h163-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pHp2Nctfyym3FwhzxIxfHmZt4JasmQv9eSmvUFmKL6iuVZWLyuZWUaBjHVKtBCAWoupLVNdXtN4KSWyAHLqCwfqoOJbMoSLYjSwfnUZasPEtCW7YWirBb-fzX4DcdS3ZyE1ky=w643-h164-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Estado = Atributo + Valor

## En un momento de tiempo

¿QUÉ SABE O
QUE TIENE EL
OBJETO?

## Identidad

Comporta miento
Estado
¿QUÉ PUEDE
HACER EL
OBJETO?
¿QUÉ ES? ¿Qué lo
distingue de los
demás objetos?

### Atributos


### Valores Invariables


### DNI


### Legajo Alumno


### Valores Variables


### Estado Civil


### Situación

✓ Los atributos que son variables y que al cambiar su valor hacen que el objeto se
comporte de forma diferente.

#### Métodos


#### No afectados por el estado


#### getDni


#### setLegajo


#### Si afectados por el estado


### inscribirmeACursar


#### inscribirmeARendir

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Kh7vFhj4RX7qvL96PmBj8b1gXNMwGxSjNg5huC2EZ3MWEJl6jGv7D5jBSktxcHX-MNiwyrvR8BEWYxgIt3Bd4jtn-f2w9xX_v27yHjXhclnOqa5WFcrI0i4pE09Rywkjsa-Q-uQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LMulbRHk18acdCsReEgbOnb98KWkxIJud5rGezV_FgrLo0L0E0dsNH2VsT9us1uxNWHc5-rIz2ediGWG9JSE0VTF4JIkSuW339VjV-6_JQXlg5tHF703BoY8yAuzyn6GBv4aFug=w1280-h758-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Caso de Estudio: Pizzería de Venta en Mostrador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NkhBcYkALLoXJCSi3bm8ZjVNDj1ne1xz8j_841a0j5M_gUZB4UhZSoQtvUF4DdLF45sZugNpTy7fWeyLLl_fPObJ4wArG4T7QxLcfMiHCrbooCFSby_l8Nnk_mFYdE5sgplx2=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1FTjg_YqD_uMoK74J4tuTJG6r0vBL0TBPCLufvaBz4i6REiu_x-d5bJ87ZK7-EjEx2k0ByuHDxEytKfeNWpO2AXJLGge71l9oBTSwjUYgJLhsIIrTZgxKudrL_pzlXYbhb5436ig=w1280-h758-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN

## Objetivo:


## Administrar los pedidos de venta de pizza y el cobro de estos, brindar información resultante de la gestión.


## Alcances:

Administrar pizzas con sus precios
Administrar variedades, tamaños, y tipos de pizzas
Gestionar pedidos de pizzas
Gestionar la facturación de los pedidos y el cobro
Generar reportes relacionas con la venta de pizzas.
Caso de Estudio: Pizzería de Venta en Mostrador

### Reglas de Negocio para el Sistema de Pizzería de Venta en Mostrador


### Precio de las pizzas


### El precio de las pizzas depende de la variedad, el tipo y el tamaño.


### Modificación de un pedido


### Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.


### Cancelación de un pedido


### Un pedido pueden cancelarse inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.


### Cierre y Facturación del Pedido.


### En el momento de la entrega se registra la hora de entrega y se cierra el pedido. Cuando el pedido está preparado se genera una factura para su cobro y se entrega la o las pizzas al cliente.


### Cobro Cuando el cliente paga se actualizada el estado de la factura a cobrada.


### Anulación de Factura


### Se debe poder anular la factura en caso de que así se requiera.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TkXD5fA5ET5bWb08Qh3GPaH6doJ-YdENsF0arQMPqqAdMyISd_xpckt8BhS47a23CoaXt85WVgTu4HC_Ssg05-01xMfQZmMLA1VMTDWG2wkedztglU0dlSWxCPOKaBGKPe8Fn=w501-h100-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vista esencial de casos de uso para el Sistema de Pizzería con
Venta en Mostrador
uc Primary Use Cases
EmpleadoPizzería
Administrador
10 Registrar Pedido
1 Generar Factura
2 Registrar Pizza
3 Registrar Variedad de
Pizza
4 Registrar Tamaño
5 Generar reporte de pizzas más demandadas
6 Generar reporte de ventas por día de la
semana
7 Generar reporte de ingresos por período
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aF4a8akJRjgqaoQ0ej8OBDhebs5gsucCYuIcvsNQA4NCDCSrlA1r4ra1mZhuvbhJf7avjuRZHn_BOxS-N6_J2VDlobo3E1APPrQeEmGLW2Ij93JsTJxeouCBwC4qDaiLwC75Q=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ColVqjWY5JTmPv16dCfibrPYXNuOuquBA_W4HHzJU4Go_QBpuiI13-uoIVEX0Z2liLHs1L9T3YhT5tLSQXK0WEsufEn4BEKcL3QM8VnbFH_4afLRlSYn4KJWDAYu5VLfy7zaZ=w1280-h956-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Modelo de Dominio para la
Pizzería de Venta en
Mostrador
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bX3raTvsRSerwxdaROLQsJqMmLi4DYUpYX-NOD9EXXmdSHrleY78jOD3rlQBv6ln17D6nbz4TEqTF5rSKNtS0d6gtvfMcL2flU-_P7Ivcfoh1Cdmf0dm-OFKFMF-C3RAC7CPV=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2sFH9Omy4aoJ8rhT9QOXXyUO2KoWAuZ_CEMVtP-BqWp6yf9eipKK7Xg3W3xcVVpRozVpWyE8u3cqDFy8P_uzcaYH5OrRPiW6en7wBOq5tkda_0MXQ2X2MbGfAyJQBSI4pjDQjMmQ=w1280-h949-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Qué clases de este modelo necesitarían un análisis de
comportamiento dependiente del estado?
Que tengan un atributo referenciando a la clase Estado es un indicador significativo, sin embargo no es el único,
Hay clases que tienen atributos propios que al variar hacen que la clase modifique su comportamiento, por ejemplo: fechaDeDevolucion, de un objeto préstamo en una Biblioteca.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1P7gY1xnpOIjeDnue7RKol188-s48E1OchEKRV4c9vJP3LXC-nf9MKcYn236EokImKZi46tkosPqKd1Zuf_qglv7EfuZkbmd3OK2siib54sOR5JkE_VuO5DZ62k4BYCl9lDvy2=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0sIM8v9HZNLpEQNZVjxheizQk_A8jAripdD-YH7-3mjleIJka_s7B21lUwJNfhSFWqtnjurQI_Ne7xowAoo1hOLUWAk_u7GXExv5Icp8O_Y5Bti4sVtylU1G2-Q5keg6yK4ERy=w1280-h758-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Caso de Estudio: Pizzería de Venta en Mostrador

### Reglas de Negocio para el Sistema de Pizzería de Venta en Mostrador


### Precio de las pizzas


### El precio de las pizzas depende de la variedad, el tipo y el tamaño.


### Modificación de un pedido


### Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.


### Cancelación de un pedido


### Un pedido pueden cancelarse inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.


### Cierre y Facturación del


### Pedido.


### En el momento de la entrega se registra la hora de entrega y se cierra el pedido. Cuando el pedido está preparado se genera una factura para su cobro y se entrega la o las pizzas al cliente.


### Cobro Cuando el cliente paga se actualizada el estado de la factura a cobrada.


### Anulación de Factura


### Se debe poder anular la factura en caso de que así se requiera.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3w7x2jHjLsb8pqdJCndsyX6oILgFgBZl-Vh1C9zytlX8b0cBl8lQLBjbWhTdf6hfXEn7FUt--PwcW4bu6TnSXcKBUuwmlYZZXN_XEBrq_gMFjqUB6NxkITkBe6b7zT_zVzKVszyQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3HniNci9zrfxnmCJR785Tb7duZLiUtc3DixEXe-kyMNbvSoBQ-oCmHFXsyP_R4h_AwId_2vU_O4D24XwQNvSZNk4Hft7p5KOXQ9bagfAvhe372FmINxhVP-0-4sLN8iSDf8MttEQ=w426-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0UCSziUN_LqHef1TDJOpM4YoCt2_weZWdQbALVeOVhvVdEdSmVPYVJ8M07STUYcnksGMC-VAXI9I610rNNMuPgRTEWAsPgT4i9ut6xJVvEdadl0e6DF5dzI_sbJOomsEFf_xvEBQ=w414-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03HXtWxM5FLyzL3H7jmY2jPDTXGoesI4_92uyIvXYyAcd1Mdr3HTSMr0gOTMyR-eDBoNr-bndv2CI-dTLShXEasxRN4QnSsQSIMGWwj9F0A9NFWqJkDw9cf8EgJqeCWQO_EiB4eA=w154-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3iHN7OdHmz9fjfWW5kp_OUrWmHJjj2pkJM-YOA9tlvrmHF_-l8cVz9u_tyXy4LCuvzFeTZZ_rrfnsBFG9Ch5AOww9BoJeUKiSW0ZmBkUghsaN7WqSF4Swh2H-LSHZ7y9I0VTTa=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ae2Kd5RceO7tIHKLz8u4eCMymNyVR7uyqNZdxazbYyMhn0M_ud79OiOiYS1S51kuiBq9XI4ViKpmReod5M8gDqOh5XPIhZ2XyquJK3vQ_U06b-T7gRIeoQQYoYtXa2WTaYuGIOA=w258-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3fSNn_fF8CIGU1QALdHQ-RLyOY9N6scY8a55K4PpLBXdxDsDBx_NKyklrbQkOLdYOp_duteOKUSAfGub0WP1dbZ4W8LgD5P1C-jvumM0D5mGFa-DQ_vTqA6lcL5VGvUj3J0rlgXw=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23mSnYMH_hvc82zWXHTpJXkQEQ7jINeOAbhgXirtQzxW9ODR_ZVlbABAThXsT0EwwU52krQgBLukk_WPTtN2IkqHh1YKlihfYoeTPG18xMHfFhWOvsA19q3ybyyw-OprmznaVw=w241-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0wQSVBqtw-aP9IHUHQuVoM7tB9qru6xzP79L9KzcP90JCZWn13yzyIpo93q7JgL4aUqnmbeAevMZPsNai0_GFEZV3jtJ0bTRTu1f_LL9bE7iYTUO-9tED_Dl8p7NPWQk2f0N-y=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0LC59TEs4sj4Ui7oEHSpQT5rYMmRhw4HlSluPnQcH-ZPx-pQcI1lE0wOKck1jSUlIvOkEOxLueqFalNoVY3h1330tUvWNkCVDSi-ty9_LzZVQb9NhOJux0MfaMb-P5hS5bnII-VA=w379-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1guQbjvMEN7lyPPEhEu_V64MzQJjXh-clBISP7kk-cg-RSzopAj40lgAmiv4JqW55jYye4w0I131_XG79UIMDU19_9R6nyWocIufLW7JFtNnXqvakJqi2afFUTZiGGlGOTHXwCIw=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2WgCGyZXpW1vsg1YvQ6MDgQpxvPXL8T9hHq8Iniv-nFVfgvZg1BSLO6ae-8Ag6w_ELxSFtD973P_ZY9YxGNgotmnVpN8k7BOlrzflkjlFql40KQTL_tMFZ3rRwvXKVk62XyVVEpA=w370-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ybJea4e6ysu_5ou2ycaFrKAy9Et5uC_vwrWnL0Vk9BYrHfaS0o07MpBmQVYt0Rb9DQqaF-qTpTa-DbbH5MDQsYXTSKmXZ6zxYq_D_F44xwvjJhwQAshAXhjMsHob0LajZtcD26w=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv23HNQuKJ5BqaaqOLpIEB5el1yYH34uhHWJZSklJZtQ0TWoGRA2PXhIjuqOm4SjGWYVEflyvVsGd2xK-eIQF7NeH_mtiwQ7t-YrxG8gOVkxzEMZg47VYZAeDmiXt-T1t8ORectM=w114-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv090aTPFAx7iwC1mtE0iNQnd_YgRQwtGQS5gkxk2fAKuuzFlY6-eI9WtkixYYgXo82VmQ9Aq6tpwqTFuMDSLtIjNmW42NVCxkGxpakvnZs2BACkH_IgvCI93lunlzzw_ey5fkwM=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eCTR10YloOFRVlxDVOvNNnMwY-ej22WeFPydp8aX2TgNW844Iv5yrRjsmlhuOOukhBrX7PF8S1X9oZauqw83TXgsJpb1G27R9w8jnLCReymwVYmCKlJqNBpg9dythbZBdhPnuHg=w312-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VOIr9qnOUaKHYlHfFCp9tnmaYTXN42nWSw30q8B5WyiS_HBBkU7zhDrGMibfBoanS4UM_WwV-inLfjHKAZGDDimTV05ac1_2wXeu0LWgTJv1O1Yly92uLYmTmXN7hQ5MjFP92Bg=w131-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1x3eEnbSXC9KbMxcz_NVzs5cPGNyhr08i2a2QWkRDHf6cTjCGVFqSMOx8IWoEOEWUoZ8xWAR3NA9cN4sXOClerAadJSIQbNwTivjG6h5MU6rZmgKYIoypCQeheTVEf-Hdfuj0M7Q=w188-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SeKvmGW3L55eBfaxHewrd6FL2SbBf9coDkrL_i3WD4qpJpuegF11zUcqzp7RDbXTf9KUlswCNF4XlpJq6VOqyllAB13QtIsCXU-g-Um2LWyPz23YrWLUaT2WIGgzPvW9CsCFvDQ=w47-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SJV56VcOc2InhwTi2auZ0F3ry4hvOLGdtKRiuoYZzGC-1jUzFy_C9FkjhwO0oKEY4jY2EzJS3rFgUpKFFRjfXhHapzyfzWmFwzNWrHKde6Bws6532Xovgcex1JXWBkphIIAq8LQ=w160-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Bes5LX5P4or-m0cb2SbWTyMJiUZkLwQNFq0mlNUrhWN46rtHTpEHT2oJykmrayoueGUAo3GQGEyA3EDPpzx03O2UXfZW4pB37t3Y0cIB3zdR23gEuXymNT89bRXA2QtikmbvJkA=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0yuTw7Goluv_kvwRhgJoN3rUiNNOkVaZpV8F0CgFf8eV-mgS-clXFokBRRN_GDSlDQqmL6pAtdR3wDTJWvAW095FC1kI8MtDtWledLmVWEsBL3XqhQU-6Tf-XCIbHXMBIWJ4IdcQ=w274-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv156hqFvBsmCejMW6DpNTmUhenS3p6BPdzXv4uALEtuTfpB7Tle5ltFVuQkbn36vxnDMeCcUMXvTyXHy96ttMQNa_pln-EEiJchHIRW9fHmk0ZsDd5vut7InXAMHnYyKZkhNakl=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WKn-rdpJJUWIrsJXdaV7plnesvcgcq9VYDrRJI5YUog2SVuk0z1idXqEwhBJHRV8QeyGPBsIJzbrXa__uuD-2gnDQQ03aNwrYAP2ODl7218y9PCryx2ho2BQgixsyWIDP8FoJVg=w400-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3pkBdsLCM5SQgo09pmPb18hH8ZrSYeWzoDjD0jVahYNt_ztIFcxQEw552XYSe66fggRekUz-3Vx6zhA_dpjUTRUigVOeRRFGsAG4D_5jVdmqB7N7ujVw_DZO65UBQLfe4GTP05WA=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BH4y466vzFKm2YQyrORH42ennvpf4NkIhABJ-QE3w2BsiR8sWIXSlVnWJFluBN2pj7mgx68do1RiQ1BfjI1awSB0qxA2EFtMtcsv6qbut_lYZDf-17SutJVERn0eyq8SSW8xC=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09e0rptVNbdKtQrPL8JZyn1WP1n-tjBzFqqlMnaEcoSHcPqqrU3lm-hby4drULVCvuxsPPuHW0xAb05N-l9kC6xvD7UlvPd9OLXfrup6T8F5FZ3UGeJyh4h3p7JbXzil3cpogRpw=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2SeaPtb2KUH9WlhyagVOWZH0DKlKX0cXy8wnRTN7ZtPQ0NEGSh4RhDcmFRfBlJK4kmVSE7DSBlMDWWPuCumc3Ic5F24RBsPAiXjUbqwHTV61lnYw9kGGeETKBmeTGJUjdA5wH5ug=w302-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BEdfxhIdBL9iGj29iGtgYyhDvZe4xs9kB8q7WcgC-xDF2rnRm_IC068PfxtTNN87WxSw9SnKvf-GRyDC8bJKygHbWDPPSxcdxZQap8pGuqLsc2cydV1ViJMebiZodrynC4Fj6Mw=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bmY9MP3B51rSUJEfU2YoCh8G8nMBDSykZrwJDf-FAgsRqPwgorDH6A0ajWleydYuxpM8rR8Tq5MbsEwkl-ENLkkOFnEKy9MQpRZPrbH0ctYSJuFmAiSHTAD8jc9xB_eldZYh7KQ=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0eJsRtOHQUvJ70iRBDChqpyF8P56f4pcRZ3yV8jyeUq3YZipiXQ42TJgTyMrY4w3x4rIboUbd48F9W79Gl0s3H3ZrFn2lGUslOx5sCc4QdsUNrMXafH6UHPZDlVzG5fz9PODovew=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1UKxCwGC6eO1GkbCADRWodGcEnODz0J9f48MnWK66o14-GwxYdgk72QkfzY1CnL8gjFTCkHgO8R7zwRJYr-tCZPgW8adr84vQ0X23OARl18bNA0n4KsJuB9oEVP_QQmjcYob8o8A=w221-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0alkDJUTCbS0lsOfx3pEgpZKsIRAgTLSz3RvuaoQ3mrJh7TCQ3o1_3a7HhjH6Qn_hZdbk0QrRAy9hYAwW1VJMbXXoy3CfGMfTSLL7r3NCO_Q45wYzece3MZeKEGehQ-sFS9DbP_w=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0toarU-k18uk7c7n2RsDVru83v01FILHHA61PblqwXQaxq7hxsD11T2joniG70HmJEznjwN86pvF4Bvkmc583csKdU2925LQlQ66qPt-CPozO66LZL_rrAl5H5r6kMq-kYAgfxFg=w233-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ULqfV0EFax8EtpRLA1QgXcBbDGA4QN2XuT0JLo6SxyhSGEfu4djljn6BW4nw49trtZ-8q6TTqu3DRWxZ_W837mGQW_oYO6V3332zWlTIKh2-bY0_pf73Srr2PZ8IQV8pk9GPMAg=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YCw8eJRzYB24DP3DSPMHQIV_nEGLKjpaqwHflnXz6hs4kgFZdQEKUAMC54Vf2psf0Ux6G7WMeloCl3FdH_ZbpD4b8WKlSMTedIPUMeuz00ejxwLiLTN0dG0KnxDf-iGxV6uou=w307-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2cdsrZMzzcJMdRo17lMmYseoSlgeqbEtKRignxqQoNSHyh6TzY1t3XBBdE7yQd7zkLhxvyYv8TQ0eSncBWuB1rrr793AcHngNFFxvI9I11wWRviFPetuw0wQE5zJH2dQiOu4Pi=w104-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1OmXm8ErLRmtPfjV612KmzHhOxNOe9oCUflgy_vzhO3qcywCYFLDVz9cBbfzRmzAAxUyMHQwX110MFVcrLL972CiuqUcjd6t9Ud0-R1JikdkH2FBdgPTGhZtkmvDOdFBs8iF11=w154-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1HVAA10-2kd6l-AMeLLhVJXqi-KoBnkAOoztEXtckVLsfL53R0AbwWLuOo7dYfQaDNqQcepOXPFoc-YZOLgHo1sweBWjeEapJTyEVs8oZGf5Ve1tpJlzHB2COcmmZHfYwi1gj3yg=w47-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2k3BEXTiaWFAsysT4ysi-R7uJmAVhBe4ZezJXlqrLle3S6XNcuWi6f7PwIqbTHyiREgzEbYT8wtbkvvjqimsXdviIBM6W3CJwglv9Fnzqyjc7FviT9_sDn7TqcBpnlnyF9FNPXjQ=w340-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0PQW4y_sqowLl-8NR9jKGGHsHjeiMOJptTde8-hVFxI9CnbKA4vymrsciBSPpwkbcBJ6Z7_fofLkc1zu_ly8-UxWKLeGVG87_h2mWE5S9Z5mCTukH9axqhJNXn7w0z8V5-5sMI5w=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nJRaaxwiVUMkhbeGFKX5XlJtWlv-E-xrxAZdp_O63KBwONDyBk69UtZbAO7xXW3H9lzLL0QU1n4NsZ1QjL8ASkOjTK2_va5_0Lsiz3DrUhcnU0IWzJ5Y1gEG2f8bW02DYTeG7=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3LWwPvmnvNbUh2h_OR4VsssD3f2dF9dAq8icOB5tNoOIy4ocItxzpKEnnFfLKdYwsRWDznMrdBKWY-MfCiZB7b21lCyuRASXVfOnQriQrihwCtHF6j-s4CS-hysheLhBZWhGszTA=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2iv8qrMCI3SRDyGS1AZEkMbZilmplHRYaRBCP-rQ-5IvP1pxODawrR3ukp-dAety3RU0olQVq8YuF-hYc9OCPGTOkxRo8AqcbSQe-yEfOGBCAQ-jsrLYAw61g8Nlilybd1gWwJ=w387-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ySOmjEu78AVGPxgztufRP3o_lyQ7yu1fKWgu1lqXFpWq7kGriUmqaUSUFKEAS0qqs9qMmRz01Om4T1h_LLkYirQLyFz2H5P8jra1xOpv2l5hZKvLCGTbDow0hfCaOALFPYlSTBA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gDDLhwfc9rBFU5lfi6UadfIdjdQJn1QJfngSVvnfppZZSACti46E_8q0fc1dMKa-TZZ0z_wHWT1i6qIWJ41FNbur5OsPnZBwMGoUwXPnH_HpWQqD_pIU86khmvcWdKtxMQoFpNA=w97-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NGV_JQAyKsu3fUFRyUD9drSzoxZkX5TtzzFl8MNYDLhcKBUl-kIv8rbKBtRUYMCyvc8p08tDPWt-gW5oV7Po1GYAz8rHkfaN4-NWJag_C3yU6I-4WNWIhOwjcOuoTzJLPQISYJA=w476-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3zC10a379OcRZZ_BP9HuQGDgDhuSM40EkRH_wrtQEiO9LkB2pGUdFlo-apTOeh6XQThcTxuXaCHlB9xM566_7_jMdVL8dzQBEUDCHBxE-v5TrVU4f7Pck-gRXO1LPs-dYgA2Ofcg=w337-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-ElKKuX2Xv11AqUM9ZagB16BhQwDPVS4BohEgPTGOKoIv5ph0B_T43ZOhFewAUvta-ZqpROT3qqZjEszD2WS4YgA5FhODajK6sKcNKvAJIw9afiHSkcfv215OggpkVy9pmP2BFg=w154-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2laZGgeE_N_Urm-dj15MNG2UyLf1yraDglVqM7CWyFObiLrJr4VqvMyyqs_JLuYF-1uUabLeN0pMP0pfSuGHhLR1-3g_GM7taE8SIbgn271vtCa0C-5tT_Y_s_2WzSXAyzkg4I=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Dxfeee7uIdQQ3mEkKd9AKt9Dj59l-Ttfa4GL_DsejGEwvCsFi9KweS9YIMbBXCgpkNNKKPYdhzD9RTVy_UELwmxF3Hkilix13CaVzTMawCtWHXQ5WVLHDv7BfcHhjYEWXNRbDdA=w258-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1qQMnu5Vvc3XgLvyDI7qdYKCg1iTEfkfev5AHqi-Fbe2sqbnMOCljqSf-jr-uA0uvgpeiolzrGxxa_IcyV2J8e8zw7oj8NwJmCgONbOttHbF9NnOTI4uXzfhBEmeHgJbdJYxnMTg=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0cNlsXPm79_1W-ab5JXcr-KbE0g-JfRZNF3bCTJjvBhrbSVXhc3GP50F_uwDk8OVYc16db3rLP9M0sL4ACprp2rONa1NvL78bblmu-U0Fka5-bRx4LDmbJBDfM92nzKUWsGsCbvQ=w274-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1__JAkwBhRd4MoAR9RM_d_szeCaF7xcpsQhl9-bRBu_ryYVJ_CL5qF4I942BP263bsaP_3_yU6XjEQ5dp6N7glDW6aqaaN6QY0NU8fqak6xLQOIppSRCimkPnSt5qVUpjSKAtdyg=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1urO29OOQd9yNFmSR1cf_pUv2J8iFZdqWoMd4WvDyUq4M9ckZbgcWaupSBv9gU3iR1nHJPu-zwqC8YhAvznC-c6ZDsrC9ojAZha4fQCZdZEJWPzi_dLTWs0YdexOWsgb_5hOBAig=w349-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2TG_NymkgKuj86TWCDkpeeynYJref55d6olYFXcqnoaY7N36rbH6XQwHEvRDibibsLTECoW0FdSuDpXkh1a2JM5fkp-P2pIKzS46PFq7CjrKPpfQ1H_7S5WGqEkviEbgv4ODjF=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1rHA0hMxGhnSbBzwfmZsp1Wqh067Sl4vf985_lRxjP4CQiOzhL_CcFEzDkYBKS-2Aa_nD9OqM4_7vSYc5On-6IyBDmfXjWRd_gLX4uwYhvz05yT1EAQJJxveSHajEZTD6vjdDApQ=w302-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E57Jr1VKScleaHS6jNlYXbGy28uWORzBCRAuMFqJuh_if62Pxk5iZEdhYCOjumC9zGvEfWt0EIMpDRrzaNgF_oIhiQ4Y_5dKemSTG29a_D0pN8hvSVsRdE9oUO8njZBuL3oB4EA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3WjdeZMCN5hk9saZR0AY2SE_OHDS2a5Kyogl9hRaeGHBO0vh73iMXYsCfFnxkdAEbnF4dPKvsgJNX6zNMiQNxwCACEFMsbH9dJN-h_Ql4uq3UWa9-z2a5Y-fzWJqWLZsaFBORE=w220-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0uTmjTPScruJl4R0Ng_4gNaQQCPBpdsJK5J-lEa1neNZxKecxq-nNpAw9LM4WCzsuE6Tl5IpGni8DodudOf5t-6CSqEAfk8luQE8pKwFW272LOWYTuQE5lmrMRikwpHaamcx4Y=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0fCAmr5G5qE4VBYBXy2LQ9X0HfWK7xK7ebgJKuaNaW0ozgH38q6lSYp5Gv2o44Posgmdez_ycqJuB9lFOwOR0mtdIB99R2_0KfcSggm897cmxJCmGcVgyF96H8av9R0gTqBXot_A=w269-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lsqjQXV0r9RRS2b0qPPTe-_rmkCZCLXdOrDIEl40o6YnwxM3nZep6KtyD0UtpoSM7UhIUiwKRKqs9uTamKpF-QjRuLaDZoChT8szT7kKRPNkrTQSpVI0n5UTRdDDsiMTo5SUj_Q=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0i3q87Y0MgyziWHxgugOL_NVUmlPSuEtuJZaha7t9X2fV6NrT7V1PPUlkbLI_uRryTn4gYwmd2C83G3JUqgylSt_puGcswHzRl95Rs_xsqgjVDspG77AQ5nQJei4rI2Xr7FK6f=w189-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0bG-Y_7HuHUm0R7w7vHd0NTovwIpYimkDvEjBHc3h4_yjZW0WSQGSx6PpvnfWfVVuvcHCevPLdPFaMYz6gyL7SJZ4Bq8MDASieC8n3R9PuwdPCdbOhJ0xThr9mxf0JDO7ttrFUqA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2GhSnGYNqOQgg_JGycA_lo6-mohT6cDoyp1yks8c3jDA71FlrPKzE9Ppegua6PpMxM8v7dXKeusqc8K6kwT6vlzntaL9QBf3NrQQS7i-0XeoiyrhdZ91AAshNhT-tnxMbGuUtR-g=w294-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eX8kWeaByFNRuD5GdJ7t3Lnfm_BHY_2SzCXKiidHmR3cumdzkG0AmpYNxQYmHeDM5AenzdZZ2tyFP3Hh8A8dzcP6WeBkgvBu_9iJmS_bdaW7FECvdk08RNdSEJSKQ-RkT-cMkMg=w47-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1WH4KPQIZn2hcxTHcEBBjeJgv_-ADETrN2_b6iclaW_MYb2XNvR6rrEXnCsSLFmD9Q70x66smeDOlvXEz2aqExDC6Ar1D4IQjPW7EDEobpRabQPdzoGDkxd-FXrlD3_q_MzZrROQ=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2O7_W0i8J60z-5KiyrISgwss9P3rdMQDAGizDmTljYokBe1Db94ADkYk_y5pL47EPjZPR0o-h6XQJal5Zd499tElAYwr_cDcPPvny6C2Si1cxaKxfg7inbSzIgSvOtFcZjrtQU=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1mJjoLX9l1Vb4kaqhUKSrtkxihOKHVSRwHVw-DNczbP9l2U_QdB9aHaGaTQELWoHUVXHEQbvz6eGqaGOc-VcqiXRTxjy1WjlwgkLNXSSys0Q_BIgF51NR-RJhk3G1FjbY2SYpkUg=w319-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ze3goSO5XV6EYgZIQmJ81mVgWgLweWKCqYStkxTnIoL15-cyoGb1pDnqXE2YQR0-8qzxTCD66oSPuDF6Z8XSiKB4FaJFG8NsREnLNg75F58wsSQlWFPnTXKqBJtmlvIYP7a7WQg=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JpbuTR5n29s5T5lLaMcBFgNdcWhroopcfRa2bVNee8sVUXERtHfkJfmbZgVWZSbJeOLjyvmUH4oTL6-v0rulpIWL2xFZxQHQpjFWniJeCnoBMz_rYqYj3LR-S_V1AwSMe3T3PvA=w137-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1c0Wvy1bjyBORD6A0VRgUkWndUENdNJvtmEggVQEQDr6oeTZit5Uq0UuawYuFtPLvCn2SawrtXRWoR_zWAbFPzdEYXd_BvshmlsgXW9Hoi_vjaDqjqEXhfGswt-WB7LmwOwDFgdA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vTNTMUtfhhsP9njKYRHs-vKqsH8yVDpgNHxrboWrUK4BKhiKNhwTr7mjJmRmYSu1DO76xgBA1NZWJi75UTeo25IUeGjqysBwJOA0Bj4I_ahoAt5LJmQ4ZYfEXlurj2rA_E7QuvQ=w208-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_T04srlElEARLZTwyMOVb21YqOKRbSnzEd2WLTjY3uTuH3LxnkOm_01ZLCtYU90FRKWipX1gupRzZ_X5Z6f9vizT1NqKl7X58X30xCtmBMn14nSB8RO2jRRpem4S5dkaSTCwuOQ=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GiJo4Z53OCpyawSAJ-neTK1HeV2zZCCpAVMGrS8VCw-saSoGfL51p9VwNmZe69m5AZuxF4WZ2EBBiBXMi0cNjNP81od3eKNCLBeRRvy-jvyvErR1M1GAkPxJrW0B6JSxXxBj2=w208-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2UYS03NCXGlLKs27IFfKdkwyymYRHI-1-rT04aTv6w0I0Foqbo2On66Da2z04r_uvr6ah-pzcK8UPwMjBKRizGVuPzM_tozRs1V1gw7wOEwUdxFhBHfOwdlnwDB9Dm7n-8V9-zog=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ye5c4MhuFpX5-TPknn83ud9IimetZR3e8w03AqlC4BBEM3vz-w6DN2Ig-yf_sk-2KB8QJpAd4a9I6Pz9Nmc7JPRc9r6om6esoyPCPe_JlVvFtPZ5inF7pqVex0ZEd6wPixngcKg=w221-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3MgiyuexZad_28a89vFyi7dpn0zAJZ174G8SU8Daa3UPJTqSG1iSL5-dFoL2P30oWSIJ7Ha0_iZkstmR56CDf2CteMTtPW59wlXAmBji9PeHGPyTMRQC3uilNwU1fMtPDNMOOO9w=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0IDTAlDyryslxiLPcFaShvAmi4g5SnEwTseQk7ErxxB6dp_tQIugTe354pqFwd3Qmg--0HueI4ZOwQpjDjgOfvwj_bbl7rf875T91hbw74OHSgit8L3zL_mSPA3UgrSjcuQDOKCg=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1TZWjzQeobKm91xWyngSUr3l3Zt_qQivOsgnN15gisElz_u4n-5AciqmOmBng4slQLXueZ1HKrqJslVdFowYrWsFlwdw2bb1OR7nEZ9wdoCZ_wAUdUrNbxp3ko5rSkHhNtpP7y=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05B5aYdegc9CMUQ4o9NP9IJVVv3uO-P2C_zCqbpNHkbTatD2oiljmXZci9ENO4O-JyeyWOaVx17owhlWFabJNKvgGoWT8muOsDJSOXRWVaFpcblOplI4trnvXkTfpfhP_kuO7MAA=w178-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv15TNoOJEvBJTo8wiqpJz2XVUlK_LIXcQW2kywAfw7pnBEKKq16Rdk1iGfDJ_eqQ8A7luso8NqqbhEAz3CXjVSjIvt8oduIjylPSHe4gg6IZxtQzR7es0EtrVpRlKy6BsTCNvIHTA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3z6Y7u3q19L-pd3_PpJTWekUREYOB72uMCPXwu0DoHmTCPgBswCvgSJcV_KC16QL43NZhE3f4dxENmjJlM4dLqTTMf418_JCTIwqdLzvWo6jXrUzlxQYi7Voes25HpqChsbDgu=w167-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2DWacWDB2N2RTomdu5mNY6esPMETqTY8uhxZBt--ba1Bijss7aE5RiEKSwElOJxRYDsbVA1UD3YrN5CiIgbUTR4jtaNmvWmnD7Nv_N0CnZSMVDsrSsaz2E4owoLpPB-Zo-08WU2w=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2q0bhrTg6OseqRGH8BgBN--d9xVoX8GObB2RuRqW6EzbRv-9JmBcM4y41n-t9r-s7fmwxkMR9CBucGxeaYhk3qVHBS88PGp9NA5R3q-a7j63nL_-AW2kwgu9VHI4bCNgXFGYwe=w344-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3nMMKQb4PuLdAimaWi2WQSRDPtbFltuDUh5Nq7UsOxTnuyCYorhE9v3WuzLgNhfGD-eG6j7Mqvuw08Ch9ii15TJ9AYoJfUs13Z7iedapITgnfduTOSH4c6fV545euvu5CPJjrA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gGxPknPrBjlWFLRy8_VIPvWlyj3GbvIq0XHLAJWEdCpCLpCa-ZFAdbJ2CuM06SI6NJ1pqKSQWFH5TLQBOug7Cin4j-RmwOgyQ2v71Rx5XremhZF4byr8Q3_N9q6QxtMBfJnCM5Q=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h82NGvGIyXULqCq9A91-SkMTjkcXN6yvP9saAHkNnn44Ir5W1E0-NpuHbFdO173LYsgxVSA2WTzrkSLA8rsVA7gFGk5JjB-SL61kqGl6nTXEZyqre9VXEgkMAqQrwqEVj6oPpZQ=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1YdVbAB-wlUxNJePQ33-rzrkYsnd66mn6-428MM2bbPXWSKwMdbxtjeQZyhkjSbCVVWEDEqfir-5bWfI86JJrncWXvsHQsTgYfLxCjZddyBJgWQMODyizrm9lZmqdqb0ZMPCTZ=w252-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv28KHaC249rr2Ns8QcqE-3h_4VIIV3795bRnoQgLTprs9raLL5QlfWeNpsTwB6cBUEARO9NFaCnYqAiWRPasZ129rx-QBy0mhNt6JnGRkFM_QADzQpyeuhayM1bA7qcme1aYZX-QA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20LGMvwyqRioNmwJUU9KGV9E125gI716WwpgvMD6WsDR-kFDxQ-DmCSbgL9sysl075zCz8AL1AstnPfgSWBu1gk5QDdJhKvHWCyd1AbLV3DismjMKCWTb3pLy4h6hwDANZ3SFb=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bagPhmYtBEpf1SruKQ2XMBSZOJGdnrAghAomTicOeyuk1C1jH9pahpnErWRVd7LuoGWCpFpYsRfCe6SdVkvuek_J8--DA3_K5VAKmOGFTSqz_6-VgYWGLYAhhZ5chwQ_QsdKzWQ=w103-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0vuHYz18Yh01Okl4JYTeJvEz_EF1KllulndJI7hW3hXBTmvV_hpiRCDXj3vcpce_cmSF8y6AP2ZK2wskwadM_VkY4CIuigqlOoj1cD_UM1vjkABYAlSlVPrON5RTQVpXKMuZGm=w47-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3paNnYsz-0KhKRwy44tX2QtvdAXVo-D-PyFcG49HVISIzJp7Xv4uvhJ1A7V-HdVAHivELqG0VyW8P_tyU_a6zNX6eY1qi6AOSLgED3VwDvXYi3pfZYQy873V5UY5UNayK64kt7JA=w377-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0pmAfYAXSaMP32OmV6wRyxgTDfwwuj4Ul39w7UOsW0j81IqO57BSOVaOi7vYZst3Ay1uoU4rhZRw5_H5SM_twxd_ct4Me27byiO8ZI3yRwpPy_EUGAPGtSLIGTQhgR5i3e5VkzNg=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E_qu8uyRSWv9QARUBRbnrmhbxvLglXb1fTrAiZNk36fajvPReqX692QtMONDOl3WwRA3Mb55Gj_tCT4xSynrzCbgfY2kWLaj1gplZ3nANzwWK97PGg2CaJontCFCn8NJ_k7BsUA=w160-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ob_iZyaOB_nQvLh7JiAG1lPajRzz1Vq9iAtCAlZFWIW7pEMo42aieC7vfM__f95sykyqJnQFpAVACRcLwSh8prOPbr5yiI2GueEsrVnQv9zwBOAZOHJsQhzgQudMDKsEmHiub=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2lorpBstk9bDh1g8Xa6psvRboOutjOHG56RieACWaPk14mysRXG95kCWVRlSoPAu8mJrU1yrZePF9IDMckb3oPgg5gMw4QrXt59Avl7NwYAaQwamdTuB3cotMamgWSP7XMB5DBKw=w258-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0MJU_LJ64dQTDPPmmU57Cak2Pca7qmrZw930ByE0vD8oOXK9zjFF-Dhw6y1ra7CLzQ6DraLbDUU4q_-Fvj9KVYrPKHqDrFSutRT0iKvQJEYVURJ2v3OdDYxPyvCAPQbdYO7YJa4g=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0WGnWnluSBq02gpq1ap2ULLdXpvgs4o8WhE05efPTCrb0G2Ev5xlxmEg12Ov6Q9HgK-H4QqryB8o1gfhaLkX9llzGL3YLR4nDeznEMOfz3KwKc9uxsMR17vmnqI8Cuf6VXLbmb=w264-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2eLAN8ngHS8r4i2pnYAupHH85GXmHKWlF43pWbCMgTWy5E7wnZGqr2x5xal_wJjPnWUC5qsVS_33N-2u-txM4vDgG-GnzJ5eA6Gk59GID1spRCD5BkW632Qu890-AU1WFdVwhj=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3P2h2jURAe_Oq3Cz_SA3PoIbVPo9PWQg3Bxun39gMcM0RF9RulV6nJ8dj3CCRqvhwzDAt6DLz7WW-zdx5cxtsq04WAlhu3p1zpZNKOnBBZpaI7xaByKQG5Kk2CNzQr2F0uH0gAUQ=w293-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1gD2YgFFXNcfXl4qPsTaQixXYkoVvoBHDklofwzQx-hxxrJcUer0pEhnFokdiiS71D0k9lvpHUwuy3Jaub9XB3sY-k6prTIYvAm-KFbGDeSa62gNnSWKeNUnIBEYFJxffR7bDvow=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2Hlg_HhYcrFSnhqwFUiDYHYf-EzmY0JgI2Z8IDLBSD45WGRqgA37S3qXDCx4B_mJQ9c1yCcFvUGrXKwx5avEEvkbabbY5xoar2VZI3U8IbXSBtA2SE8L5zpCjLlfPZD2r1SExL=w225-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0kafwhgUwemxHDXx2_4E3NzZ-3HADpfav5eAKmGrmAPYDkTQmwWsk3YS5-fJum1ctas6PAvc62sxqvrxuuoGy48c8hS8wJhmQjdOA5qqiRjJNaQfqI5p_fPMeLGexGZeXt0oIj_g=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3JNaKnJULBZ3rmuKYA2J6kuJ4fHdl1fae2LyuARBJ8Xrm7a3iH7ni3kZ-QGsj9RotX5C7n9PBDFKWKDiILMGbHCSCTAgsA9kRgG0k66lSMosBdbaueLYc3JDcIyoPGBpCenNypMQ=w153-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3sjJ1No8G1DGuw88X7dzZ9hj1J2ptvaq_y9dUj40gF_7pw8zEofGWjPug1yM1jg7jxSctTHs8qs6CI9XaC5ie2Yvf_4MoUpo1DE2Q4CATbM7Qc6hQq4SGUl1iMnD_QhIbaf8TLiw=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36mLzrfxC9WaOXbVabpVkU1b5WKIgrYItef6FkQwx5i2UL-j851S-srY5oj1BFKa-58TnzjlATXFee5xMP4aMQOQDsOkSf6Wd2oQgLDYBhb1OczzmS4BAIWxSrGvB2dm_TbCEoXw=w222-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0JHM5h8giaYUAR4FYkneQ9jrSg-NmvuLJfdmj-UZGz3hgmduX9mAi3vL-mZ9BK4qzYLprApJXPUJxjU3ud5tQdRQehvYnpLYa5WpyYyktqvlLRscyPq_OpcqCiN4ixDUO7Dd0jNg=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv078bh6EXZhZT3GNbwpFQRLLu7Bzx2bt8hgMdJGuXiisfsmibJyCeY9WhejhmsMCPo8a_rn8HXpKYM4t5VY7K9mU2swWwVkTwL-021gJmr2xk_PEDrKStixuk_rKMlwa_yCPAOrWQ=w160-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1QXtmez4PCvMgMfiGT5GBuxN19AGHAvIHpCdOEdm26KrwWUxdpL0mw3H6vuntW2H7C_SAujinKscE84C-rEECtI0tom2b4V3Ji5AAXmy_L0RjN9Dwz2pclElYRjlwrDvonJPBbxA=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2l8vHGblaWDCARjOX1luTlckxzDVnSESnh3Lgew_Cidw4RKJegmlYa-lwFbpoY5gezEeIXUBntgyzDSZZp2NI6ufQXW8932gBH8fX95rPXZPTc9NwrGGepqw8_3hizYxqyMyAQ-w=w258-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1KUO_eg4qd7ecQqapcMu8OWqH6aU31xij8RtSHiHgf_xa34CNIFRWKsZBm9l4zpX6dy9CBe6YcTDp9CxVqHZcRzYJdVujTGYQmR7y7JmEfcaKT536L1N_-U8XVB-9PKY0am9ggEA=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2PGzYdcfAyoZmn_R1S5TI8Er2hxjV5EvWyI7q-SZuoP2tFgP2SHzQTPegIRxZFTGkmhDb2KwgqbabPSWJqbrNqtlMWCxAq1jE7Q1xCP59LILCGZH377-UBJIzsRnvvQTUm9qDSBg=w291-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1DGFW75BDmLS0hUoIgT_qv33lxuV2xuFvIn5TdHKe0fLDhksWJ8kxPNTmJ_SgFwCRzTABmFYWY0L_umtYnzgXbkUjCHHE06pdRBnO-XcxNQ98QFOEbDsrVBV25RGFjNHhpCoFM-w=w484-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0A9_QHwLmGaRmBfExmG62JkAUNqgsaSyNzlhemGJA7uY18H_Z-SbpvtJqV8N8J8-ilo8V-qNJLk1OOS-sI9v3KrNJWVkbi6lptGDt80cwvBLLTQiT7zJkXl67gIYZga750uDKEwQ=w274-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv365wMi7vIyKD-Lwmy1v1P3wbq9cr8ZZuWDTfN6JQgg7ACJ9r_kbdrciKTX3ZKwU3hCXKoWvfGK2s8ORMscwdc3EQyENbb_PqvJby0IcZWKZT82aR6xPK2Xm5SM-kobx9TgHTiwgw=w144-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ae798McbGdXabImFcE43V6cM-DlIYD9gez3bfzKKAqfRyX1vpeajiW2ILBHDZL-_gO9JvvIyblYAPPcCOmWLHID1XFgM0lVxZ73WjL_6lojs84-yD-bbQD4NES06h6G15Lqg8AA=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3p7o_7c7ygN2LbmMtfWwWX5hS-RQHYT-M_mhyUYvKF8VKdtq5FCXRjakHmkZca4B1OguKCdVrz2lwZUfa5sLaHbaYyPw0XF_ytv7B135S0g-qoIGV2AJbQauL3uj4VVCwC0tgFAw=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZAVQulOzQWy8a4Ai2vOot6aqiQHPD5bmEBB2pxn2YVJ59T0As6q8vSYMYuAXYccb3Eac9fL_vZ45lN230mLBGJ_k7-qfFTURaSsKoSUl9wrad7xbiMRNg78HHrySZBaQlZ-qBkA=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2pQ2oiHA_eqYIIQy99f1T36LMaHsCqiVketL6cP-Ags32BkxQuWZ49kg6JjFIYN9vYqw_qkfu75R8Tixy6iDqXZQ2B1HHcXZDF5AkZQpl1iARZQziLfUQAMiM4VhJwZwZphIsOkg=w332-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2BfracU9svihUHC98hg3qnmvJXgDRjaJjfAb5ydAZ0AsnwJoguObtJtFDIT9hb7FA37SRV8lTem1ansh78soGQrv1kDtuiar5gIdoG_UtN0OPTYDzBj3qqBncWuI_pWF5ds2-inA=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0ClHNE3mvosMwUij2lT2iZx9_Akzf9SgsJTCgS0QLtCa_PtrpHzSF_btxp3fq2Xh63MOE6w9wLtp3_lww-ZW5fFZ03LUdDFgiEs2z30fmSO6E3HltuNm4DlMBf8L3UJGDMqg_Fzg=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Gns-yIQbyKmTpe5xtKrkBm0SsvGzRdaL06Jx_rSXzgGqPBNBu-zqTNP2kzRHB8d5LiTlcGqvJN68GYpwCv9sb2wRnuLxceS-ThidJIfIAJ7wVoH5A9zEThkJQtLenGPXaKfLnSQ=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1yFBU-jKhbUnT-RDAomclHP_6Izn05NSMucujs-ZMK9q1kM9WY7VCjMJnuZGePjjpIX5scBbIR4_ADj5sHC7ar_1djIwTkAFTD7z7-oH6zRWBXe7nXnWO7lYUJtX0cKOWcrRXngQ=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ma-6g4GiUhcyHz7anc_9mznHrpfy9Ye1HtOrjIqkG_KPhoxiLxJueg501tZC-Gz-v2XZ3tc0Z83zcUJIEDSgpmwjFO-JlGRO-UM70jEmu3wwp9csD81eR9ZOkxEJmj_cHXQvy=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3W2iBIiA4DLNIZEusbFz2oZO9SLthwudIoZtjiLkLIgDOc6JHigBBTzT4rj7Pk4awu1CB5ZN5qIwNQE1E_R87pkxE6kz1f1cLNIoVuJDLyFft6eChpD14K98yEZKHNaoAHxVCo=w278-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv36UlY2bvNxcAL2TRoShHhcPGDaQzle1sUM4R1fX0MBrHKplnszUPx4BGhHw_o1H9Tm-HBD-9JSMBJhzfnTWq1SC10Zs9EbdRHnpsMWFcIOoQ90RzZaqQ-WtbZWK5AKYxe_ALUPIg=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20wcsVBLf3bWfD0Jp8fAuZVrA6WoJPkPCKMG5FhhA5foNqe2t2KQvtcf6FBp_vPJki6Et81i0zOKuPNDrHwOIVaZquGPWaJ3tgbX01KccpCYMxzOQhDhQf2UFbBioZuIiFcZiyXQ=w137-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3reOhjeldkRyXgJ7FIGp0ls608CcJ7IbomK3f4P9Yq_6xznbuvA7_8SRa-JEWFtvt-S-f7WGDgO3Gxg1hKpw25IgJgmqex9OYwrhBeVXSZfmxd_cjlAX9ryP8NLnI2VJDbMXjy=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2JN5nIk4fLB8Lr_dKspaHafrNRQFkeoyjLPgT4FscxXKKo3llEB5Gyun-kkRdQsFLyHSEXSoCEkm_UCldLm5uZC-4qOrgxkQ-d4t1Y3DN5tGZ07V20szTEvzwqQjX3Nq0XDshM-A=w276-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1escexuYmPI8S5lENXbXgoBfJ3zgXAspBOQWWGmtE8rzx8u8C_p3BDSeyn0qD1iZQbnlS1xb1qeQ14VKLNbdUPTtP0y--IrLVNs4E4SkmbQhZUcaO341KGeJMjUPnNqZz_yoPlPA=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3yfJPtpBpvuC9RtFtFZwJCdkYwEwOClrACeVVfGFRDIJ9NZ5oRaM7mina4tg9Wp4Zv2_uFFMR5_bhDkINcOJdUG7GR5j8A2c92PYVhiOTkR1j4t9Gc48zSYUEaXbrAPLHVkUNquA=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2-_G_Mxrhp34yPvWyKAPuAQ9lY-3FH1GbAL5a2yIDPeN2HDmtYqzLbLoGWIR4gBwVYFEJfGDDZt37jicIP1rHK2DDNi-TSI0phf61KdZs6X5_8VwVtCbBqkzZ_jAKu7MlewltD=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1-hyrQMV-pPcf9c-VIBE9yqFq6VuKQ_LHNK4o2VSpZO8QSIiPqdZ_p9X_gIt3qcejGaS3Seacr9ON7b6WwKAOGGg_A4l_Do0uMET-ZXKtDztFxLLd8IwQVwXxw_Ugkz--gFxzYBg=w199-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0GY4EAnoP0O3y4KIOXk9r46YSZTPFQiXspWj-EkUEu8xUqnT5NqZM3jKE-b6zGR_rEaDGJxY9qVplne0ONSeP77_Z4IMTU4VMVd7pVUoMcGTyKSzAvpF4_9DpcMynNvVcKGmSKQA=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2f7ddQbLPtkObO5sB5-cEkCKqadh2-9XjGbDAhNUFnbU3xzad7POvaQs_Fd9zk9I19DTGJdMwVauwuqIlU0F0zAEEd3SE8RiIhZ6n6mG8J4lnQacMCIzCkZ6GpfIH5F7n3Z5kHVw=w145-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3TmnHG-eeF5OHTsu6mOewhYEd8nBp91To7xin72a9Kpu8lPpMU0_PLcqkWOgrugsaB54xbSHwwyEyQxnqv-oDLIjlVMNT-8-H3tDtPkDfTFlrbrlTjMbWxmI6YiIFPD6fdU4u7UQ=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv20X6_vo54bdJZ7DuRRdKspNbAUDFX0akNRKthvP0BVqzi2sM-cIdRmSTYqg1c3h-nCiYw3WtA_uFzFIeZdfHhESiVkcmhbasaidiO7-3Z8dWPPvvfUlVdI6NIzvdp0QaNqS2DT=w278-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2XmXau9t_yDDVLa45gcRYgqO36Mnuo51f9DCCXNdchCT40XKnVlKPc6kw14-Tr0N31c1KyM8hEPrI3DAAN01Z6tZJsMgyYLRJAygCTyZXsJH3cDNuWb4PSpOGGTM4ERl7h1ZcFNQ=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1h4kLIF-jtW1OH3JZ3jJIR_DUVFtEDxt041ekcd20FoF-JSOJaH4MUyR0CbG0w3ukY7IRJxfalqjRcWwN-aGPj9fFI_VDO007C5incVyTdB5clayf95VawxrkXesgtBhB5e_od=w111-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1AoGhCrgxKUJ3YxVmlS_nEihu4n_saH4DIgqGzhSUELPY5Doxq79YXp0ZBgdhmnUGPzippp1_7TlXD20yXIUm1BRZod9-5m6C2LhobHcP0IRQyeJR3qu-hYF5ib-_5sf6EvELPkQ=w106-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1ZzYpXDCAHP7bgADUjMAlampvCS3LDFhnyepi3lglMJ6D0obZYANS50s6NuTEeWiZ7YkMmtckUGVQ0dHjcwrvrVm9ZzAiF3VLyYIM4zGfM27aywodFROX-WvTl1PzvvjBHLxRp=w102-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Efc9kd--r0ZkdpPMQnqSnSL5SDOqBdq7pOroWJ4yjKgex4q1TnDhgFWFpUxYovxz1NKIsafAx4X7AQ7HJuTh2gdXvKU0etI5caCHRDEY3_PdAQ5yJXDPU2tety10fnTiW6bLhIA=w47-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1hyQwFYievCOYOmJ7ekZXJbjYu4FzXrMEmj3sHD4gI1m7VsI6MqZk9MybQLF_TAeJgXCEm3WtcxKAzZdDMh09s6rsfR74ocOR-qlHHGvIPZE0ZV8xK2YvmrvNyG9QKSLSDcO4TmA=w226-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1LqiGOlxxtebwvfm8F8q6Sfetjls6QofWN08iVvtZcCDRx03GpF0JNb7fS_Qi2_u5R3le4sEbYA2-AYWVs1lftHE62W3zGISySsKs_1fHKguYKcK3XmMFUkTyOMV5Lg5taIotL=w96-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1VxK2C1TFppVwgY6tH_Wg_aSv9gK1Q4SbRlO9mJQjoDrP4ge2CJkCdlRKrR4jGzMYDqKXnwPiwjtaG-3OK8F3ER0HG93euubtGja3V_lfu1BPopvp5a6-uG20UrcXawtrLfonl9Q=w127-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1tSb4b5-LX8vExPHQbdI0tESnOndagPtRVdVU5kTvuLNeNKHAIxL6aMZD7YGBmWAwiHlgrkZMN838yoWbrBPJio_vqZkb4yU2hlZ_GGoevdCO3-tG4V5d0D0UzMnxWZrh8lNcBfg=w95-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0mn8QBWTkZh9oqAV_h1wHXt436zFMufB1mRRTR7hFSkYWjL1Q_wdSDQeXBKO90sego-HLIzAz52h1_d9NQhOBGWZrNA6xzvsn68qtjO0PfUN590sfFLVgQggICSYmnHJafBkOfjA=w258-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv14KzZld3tyRyyJNyxWipp3SlUejR-e4ZKhvBOx5UJbXa1Tw-7uhgKBnskdeVu2mOhnoDpgbzgRWd72nXM1FrrXok4OHj3umMW1dd6PIjAQuoci7RiS7SRkIT54nvkuqjatE7YU=w98-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0DW2cuG7Sb5wlNu1U4m2sbUN3XCzlM-PuYv5SLAJOLJJszsHnbUfk7zlD4Q__SlxR3dOc3yyMbEaiZ_YEgsW7ez8tgHr6SrCSRhbOkug3-DOhGJM4wGhN9_cWE2sHP8tSueWnWAA=w1280-h102-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2X1V_D5q4nKjLorRqxE28Hduf6rPqmQFYBdxFZGMdKkXbC6ZkB4qCHoKreTrgQloEfAdCwRIdie5Bpg8i8waDT_I0nK4P4dc0Sc0mMZboVPW8HMn4BhKJuWxrWaawbrU7Mps6AvA=w1178-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv01CaQe9ZiZkrLYpGetFnSAqyKlyYdQkhvRUi1W1_mpHKIRO085wiK0rXOzJNZxNnOULJYazuQGsg_WDKOGuMayL5UDYzMpLOdWUVh7zT54mf52FxlWQ_gvQqRoQvIBZTOpqMfX=w233-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1NDfB3ahMIw7HsDZI8BmRqE1f1hnR5XVlziCf5Q548p0n4AKBZRziPLN7Ri-e290SdSAXU-VUZ9QnBkQfoMI7pljtN4Qzi7AyDzij1IfaIkrG6y7Cj55TafOilD6MdxQ1iCvF9VA=w1280-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0zjpgzxzRiqxFKkzUpBf6ROl4huxucB97877XDkfPxFbQGIpLW_OmzhHYsMWzJXxRteMrR1KZHsWbKl0V9g-y5u6EkLDIsCPyHHygzTAcTDlynjMnS66G28-P-uJtaHsKLmYkGpw=w318-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rtC2VKP_MdOyzEfzeGU_pagVbSarsi9SlR4-hShy3TMbvIAXMfeI_prMUY2ItKaszBuYT11CAH-10k4t-_7KygxJd8y4ip4pL7-LlmutB02H1POC4XVgG2m9aEskba-gwjLw5PA=w426-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3odXNPWcNjSK1OnOVtMusTjm1yahtf-meWQ9qIDePmzlN_biT-j7sSfH9w_Nh8mL2eghteGPidgqtD8tjYd7S2Ubl7WBAc1K7uDtsbWrWzDtmp5BQjiXN_qFatbxR5QxHWMcQPeQ=w270-h136-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1bEJ2h4H3hDZZfDLGGvNrLP8DjSNGcQRJSRdV-1yiWEzHfPd9AXhanxck46uKu5-1PYqk5y_KQEIS2ThLWfVK9I2uGFfUTx4wFlwheSSw0qCoRZM5N5R7jtFAbwfgVYfJrdjw84Q=w1280-h104-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv19QpMWKoLBntBuLap68MHds58NSJxuP4b97yLpPBpN-uQVxQnAgvXIVAYEvrj51pOTpF2a3TUrX-RtEaRwLVvOHZAN1oJOLLbYIc0Fr35y6QwDkV5_oqPFuf-kernXypWbU_ChuQ=w1280-h758-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Caso de Estudio: Pizzería de Venta en Mostrador

### Reglas de Negocio para el Sistema de Pizzería de Venta en Mostrador


### Precio de las pizzas


### El precio de las pizzas depende de la variedad, el tipo y el tamaño.


### Modificación de un pedido


### Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.


### Cancelación de un pedido


### Un pedido pueden cancelarse inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.


### Cierre y Facturación del


### Pedido.


### En el momento de la entrega se registra la hora de entrega y se cierra el pedido. Cuando el pedido está preparado se genera una factura para su cobro y se entrega la o las pizzas al cliente.


### Cobro Cuando el cliente paga se actualizada el estado de la factura a cobrada.


### Anulación de Factura


### Se debe poder anular la factura en caso de que así se requiera.

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0E3grJC9KgbMw16rosLvTddrxugPw5mOZrK9tiRBxguQaaX_1Dm1JBGFdKdEDnut7aL0x7G9RueczeWzOnezSwH3AAkLrwCxhH99Ac3dWvEyd3m-vY5NBEanjDWwukBRcM9aLXBA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3p6C5SAfu7FJrxCCIw8J99bhLIldZw18j7yLSL8QM9w2NZfXCsJjyseTWowA4Mq4rSmX8iFUjfdyBkvrs_cGhh9BH7oxTNh_0WWi4yL1oR7iC9Gl_7RHPxieNh0yPAUEijUJKt=w585-h828-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0-NBQr5x_h4DzLdW3DxWsZFhieadmpAnzG09HUMwbSAni6pa6SkWdC3vmhpND2Vjlk7JIDn1rkSg12ew-1N3loS376BMcivhVKcuupY0KAZKIq1Y8oHLVUOaPB69pAO-hbP7US=w617-h849-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv03SPadj0kPk-WTqEUdyGQFmppi3O5J_QSXhmDGpjTGJuR4LSJbesVeHjLkLNRyIOX2_qjsPbg8c8fwcNe-LkSZruLsQO6dwXAT7XnLsrVAQoaipeZfapIQY3op4gpHiTh19aGg5Q=w792-h168-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bb8L8OA7hLVv0MERdMMZ_msk6RqQgiQR25hNHjRcq3KM_3ET8vzcca8TtMNBIjqroEoGjDQ9WjCyYuQnBMvLxaPfHrF4eaol_ic-SY9hU32Ch8h5UrzsQUdlBMehyukcWR04GUQ=w647-h193-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos a construir la máquina de estados para la clase Pedido
Creación del Pedido
Se registran los pedidos que los clientes realizan en el mostrador, informando, el nombre del cliente (para llamarlo cuando el pedido esté listo), la fecha y hora de creación, la cantidad de pizzas de cada variedad, tipo y tamaño. Por ejemplo: 2 pizzas de molde de 8 porciones de jamón y morrones y 1 pizza a la piedra de 4 porciones de palmitos).
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_SzYXsZ2nnFQ38GAlDBbfHQNoRtejS20Smkre7IntGyEI2oOaHBe0ne8kcqSQZqh7zwAELkTkQ-1qlFHXxltDiznfDywtgjDmIpOBhDJi91aW3AC1jXu9yNtKGesyyhLFa8objA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vZrMF4RkIA-Z5Tk0uIKOmpjMYVFjC-zCk4LGZhRoJuF8GIyEyi0gkvpe2uquilCieMtqE7o_1eBskpiecfREqXHVWA3Udeb_LHyuh4gNFQAixsdnL3vrYGcSchkzT7ZqWRWW-=w910-h869-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2fmmqixCEh-HwmBCBV6n6CbPPdwKE5XHFCq2PHUzzVC7YZSlZ6EUA0n_B1DIjDCZARWak7QqcMVH8rIONe4rob9a7JiTCeJhlWgSIzoJlnAygZhl1q6owjSYEth1TnGasDiJFU=w959-h902-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3rOb7AcMIlrpmqJ9WpkPnobG-Ng8otuRy9KzCkf66EBQ9tn4GOBQlkNK3e3KA6UsYTjmDGRAizrZyaGIAO7XJREUYIDlFtPX2PkyWfAq2_JWdmDaC8R-MQSay1Ck_EsjVvDlU4=w456-h344-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos a construir la máquina de estados para la clase Pedido
Tratamiento del Pedido
✓ Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.
✓ Cuando el maestro pizzero va a iniciar la preparación del pedido debe informarlo actualizando el estado, también debe informar que el pedido está preparado para que se lo pueda entregar al cliente y facturarlo.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3m31UyZKUvmosyXoLi2H0GeXU-_DFKH_fXx-wEo4mAiakv6imgQxjppzkDfG818wOiEYVki02dhNf2V4TgwsIvg8afa-MkHvsDzcJIrD4q-yBf935fUQ9MSvlq6LWbrRDYitILaQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2VybxEGUbPMecTo0qWLxQFgVoY8po0xijlpNrZtEqn02pJkWnMq4Op0yUaCmRxR-HvS6Rj7nuRnxIMUUprsxuBk3AO32-1XFtkkSoK_8mo9LyBJhOiuBzlwjAuA_aI3eV6IbdcpA=w819-h896-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TjSDcIdPlUNf-wmlzUVOrEwaJP_YghM10irwqkP5CD2I1NUTK7CJliFmDNpZ6lgDyiq97PxrfGWAgiy_BojrTy2HZWdkjtVP37VTHIBfs6Il3-Vm-85Lxaeb1gFlN1pHLqA6dHQ=w846-h920-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1J-PDoy_OZHPLycKL1rYpDMbCzfBcFjlGaRxwpjjWqrmQcJZHsxTzzV2joBhdpiPg7eV8VhAD3Mjnk37fvTnoJF7FC1DuaFBN4aSLMg_7k8rEjjnj4K-wTBrolwEqXL_FqgjpXPw=w496-h560-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos a construir la máquina de estados para la clase Pedido
Tratamiento del Pedido
✓ Un pedido puede modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.
✓ Cuando el maestro pizzero va a iniciar la preparación del pedido debe informarlo actualizando el estado, también debe informar que el pedido está preparado para que se lo pueda entregar al
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1fe92BCQg0Wh_8Icd-nJyj73PWBxsjyrtKr3ZomXQ-YJdnJfKm-j1kNfnNa3FL-qxFmDeUUCujW-BERPqKROG2z9jgHtJe38IXsFOf5XI5IYSy1rRD5rv8MyoSuHSCfMWDz3OuVw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0KXaFXOGwlxDYBHXTn8iqlaSy1ufezhuYqPBdyKCn2N035uXXjuLHQr7hzCgw_Z9_KDOHk8E1sLIjj8lLM9RtKUIxPEEhIepWvlv0LCirrK15GgIxa6P37-CP-OoAyDPJVOUX5=w819-h519-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0_OvV6E39_SDGfG2HXBtyAnTr6tbQ5Ayjki5q9j9BfIqtWlAPbbwMDHpsJpr-zjdWlbyBjUICzsAIwTLXGYD72LcEy3Uz65QBmKEvkMKZM6xJ5sgyYR-t6VSwjT9x_NPhrm56DCA=w860-h551-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3bjEqw3yn-WAq2IBzLkEmTfYKwNpwyBdjkzTInSSiseUoQs-B76o7MWncDDWR0Y3lhrLC8llVt9mR9KqxwwfX1wLeyjxNA8OHsfLhKWBxCVOmK2GIuROI-0GAbCzAh_AyYyEY99g=w728-h528-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos a construir la máquina de estados para la clase Pedido
Facturación del Pedido ✓ Cuando el pedido está preparado
se genera una factura para su cobro y se entrega la o las pizzas al cliente.
✓ En el momento de la entrega se registra la hora de entrega y se cierra el pedido.
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3QwFyR70t5M22M1Q8LrpCrKXD1s01YTMKEeW0jH7Aod7W9-lcMDUI7j58zsw8NUM9gMcprz0KzO-YxwuWYsOKIPMgTgN0JuM-3eqBlJWPSDp1slu5lLEnvD40cyA4U6vEIm3MPdw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0CpFf3vdeVBx8DtsXp8NySD0FGIfq9XUZsFc6zuHbphs7liIa9e7gWRm68LZxPfRMqXEFUL90kbm6yJprMb1DbhNpkIdxkd-NKSeNnqVF4NM8i1vyabWFSPSEos4mVQ-InNHmT=w852-h519-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3NDbyk4S9PGAysZ3ODSCG4NE-jEeBj6kfgPWWRoD52M0qgf1_TbnLcrgzLHIodR2_7DWOkBgti6jYztxYigkZusmobCUwKnBQ1I8Keb3s4O3k5SSIKO6CCEzJn3Zy4S6iSoOyLtw=w892-h551-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09StcUTHgLxrWnUq6djaBpFYpy2M8BryB_0MXE8ZJNgURX80glcHlQAF8_InJ4CNfI5gRHUTe34Hiqv_iKGiZB36O2DrKstl1ftVnNA2stepBSEKaZUYzaR6yMoAhD_PoGkCqo4g=w832-h544-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3ZaQcSqwMKQtR-EfFAgmDiAuuq5ZFI12_lv1IjFKc8l_goCoMZYSj1tNbPxbN7QzCRZzgj3Lajev3AN7Z79ZN7dvYpGLMoWQeWzkvvBrWTd6TdWUB0NTjeYxhAtuvgcxIxJVeZ5w=w1280-h111-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3aO74ACbQeIUIs5FaF4QAkIhSfi4WUcSX2nkLOH1fVryLG6WSjiguQnX-9K9c-n7hxCpGigdVCZO1d6eWHEDr2eus3t8Z6rgvWfMRxlWnI3AQsVbiudACZ7vnJwU9P4HqRZkVy=w1280-h132-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Vamos a construir la máquina de estados para la clase Pedido
Cancelación del Pedido ✓ Un pedido puede cancelarse
inclusive hasta cuando esté finalizado de preparar, es decir justo antes de que sea entregado al cliente. La cancelación del pedido implica cancelar todos los ítems del pedido.

## Hasta este momento hemos identificado todos los estados por los que pueden pasar los objetos de la clase Pedido, con las transiciones permitidas entre esos estados y hemos indicado cuáles de estos estados son

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3Ut5do5tezPMz4YQXveRAy0XQlXw217Zj-vfh3wlWtqV9_eCcQ1RfVnZREuXQeDWx-PYDe6uU_rk4P_DEqB_PSl4DAoWA2blRZ4UlVzoP258z_Y8j7bguYCNCsnx83APv4zxUmwg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jy5jdALHYwCTIeqWEJpsTm8TN8luPIH_qs3dtJmHBHguax7cUzDU1DHL-43Cj54-XdhyAJEKs64cZXF73q385SzVnmTNF8lyT9LcipTlDyVgnOpoECMEgAwSGLKwmz639U36xXA=w936-h599-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv35619nIgBTrmxr5b5qAs_fivLt-RjHreJg8PFDbidpJCGp65SJvOgDWG_qpTCUWQiGG9GCPYMrDqhmuF8XtikPd6h1Q7aTmk9YHKX2mdlPaNWi-chKQuiPszeYsorYcEEPLnkY=w615-h384-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Ahora nos ocupamos de las transiciones
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0qba_IwBLSbEvEkJpzLUmFU07X6UGwoBvZhTisKvvLrwJLeGZFfBendoRBOVaveGwtg-p3GqvrTKMamzRAdBqa8hOQ7jpOG2x6LIOUp0cmgOIcQoI8DE03LIMhSxwe1WhdJVa69g=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0EyNlhUkRE-RdGwVUMP63tgLPOWhYv7CVQAqvN-00WBDvheu12r2EtT3gHjrPwaEdBR1gZeBIHh9i7KLY5yYrtDd9KAvTupRkvVi4O6yh9KefEFgqdeqHny-QLd1Zlr6m72VxfRg=w1280-h487-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0oTeLqkLjd1gU5oKZvR2RCqraSkntjn7dvByeB48apNDKuVM0bQGACvQSF6xRJ_OOWQPSnBUmmklzTVuacUWSHFltNkJ70egfFEsQJscVZxJ5BsM13eRLPqqwYvkjMhNIs9Lwh=w865-h576-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GN7moTF2fn4Nv8q6lCCLgkj-VMpek4Bt6uPxL8Dj-fETuZvlP-4cxch_YyA-aNaW9TcXBdsdpOdcvBg8vVx0e1jq9ENPe4o36UH1TvUirzmgqKQIaqx1WX18rTG3iKN5otgXtRg=w615-h384-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
A las transiciones le definimos métodos y casos de uso
Máquina de Estados para la Clase Pedido
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2k3a7Z0MUMaZn-g2OYiabeTBG1CgPaoKg8ib70sBpg5f6H5SyMoeYzYEIeWJrjWIyqE7vNdc_njj66cUHI8ExdVi8_03wZPRgpZajCL4odrnhAbw3-VKVwEdnplQ_-ybmvE6BmcA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0hJJ23aGg8tFSIsfismjN0FHgiP4EcbGBsDSZTHowGZSR7B69SxRgtYSIdvR8a2v51paQBOz9Lbz8W8COmPw47AGX-KP0mTE1-zcxYcnQ6YyUdNXMTJ16D7aizLZtFmLIfZNtxYA=w1280-h1123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv066ZXpOFEF0suAeIu6wUxA0QCXKQc5OcaLh1f4eWHkJsVbU_CwN2sVwzeKHbYXPVteT1fgMjlvU__XeXufEGQOjFdDXCOEdGeLSNa3EKOdrM3yon9K8xCInI5bE08F72kbSh-6Uw=w644-h411-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3VTL7L2R9MVDsqz1KbX9nTRvWHkCXbs7HT2XeT2n1NA1XN6I77uSH5oKiOtrHTuIj50J4Jiq36qM020vBsXfT2HpAA8s4IuZ_2Ijo5k5moKDsObUOz7z6daHotrm4wQ9BH5-WEYQ=w669-h440-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3f93Ofe-Nwmoc0_78IQBwxDIpQNRR6Uv01FPgGc4Cm6t-xK4QJOVL5NmPwLoRtQJsUo9X5zTMGZIWwQDTJO7tRo4r680s9cLRRDtF9ES6htrST4tzEOAyzzL70OSQQGvODL1EYRA=w1280-h859-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿La modificación del pedido afecta el estado del pedido? ¿Y que hay de la clase DetallePedido?
Modificación del Pedido ✓ Un pedido puede
modificarse (agregando o quitando ítems del pedido, modificando la cantidad en algún ítem), mientras esté pendiente de preparación.
A las transiciones le definimos métodos y casos de uso
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3GYNK6m2kY5qSAnuNJ0zuszV1LX6aiJTnfdBgr6jM2WEUi4luJrlAwbZaOchPcujC1k3IzvBYe36mEx5iXbDg8aZzoK9qG0NI9alIHv8UijUYKBmbf3gG84W3XZ--wazgYt7h6hQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1GTHOW97IxW8Ra7HPKDw8-RT_ouMf0D8bUakPP0eQq4V6Z-KSCVn_dOT8_Yq46WET9YNxvgey1pNYy3d5EEkBsU6RCqnNwOkiQLrqiQXgtNcDcSzDt3TzFtla5jq2CeEHtHP96wg=w1280-h530-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0QD4XKLc_7l6qVu6AsuVWrCErMtlircv5aWeXRloh7E16lR_Y1jpnlO00K0Zb3QHPuAeBc1ZhYFxsPwGp7dmygbvd4PTaLmRTUP6ch9bS2BWqKsJB-ejHVwoGdqZT3dTdelgbCOg=w904-h577-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3dBOpWO66vt-lBFUZidsQvHxG8jGa75TH3F50UvrXhEaS0FfOGIEhHde9C8bhVLdYH7dkeKw76__-F0e6AUL8kRj-bDg5pwxSZasXgsBDs5C_LZ5vtuseo9S26qr4Q1XuRFqrsBA=w1280-h1123-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
¿La modificación del pedido afecta el estado del pedido? ¿Y qué hay de la clase DetallePedido?
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1aIG192itwLA-Bm-7JBDc0hgsBISwmjMaYhW2ndPe-pwcWewx7_ll6RILyuPLpYZu8YOgTlsKaMHLgFvplX3a9uHMZP9NxNSYhcOBwhF0kGdKzJQ1OWpTazSR_JtK57x0dOOzL=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0C3brb_rgaHEqIegQ657ubYCoe1AN0rsxGqTHD4jj7KuzT8KW2cRJnGSNmqgOEWMiDdQSDytvakHD_0GpKKpEYOc10LQrJ7-y3Hr60yCgIz7j-YhicOzjLuuC2ttab7gRc-gQ9YQ=w1280-h617-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1_NUJFtYjeN8w2TKAj25t8inPJi3rX5Eoz3rms0j8_RLhFKDU0UTmWMR4mAUhX6GWqS5e9gbdpn6a-uNhMLQ3ht1o39YYJDknU8hMj2-1rlyZdoXIv1oW1kYFeSj1PVs3UG9Tc6Q=w904-h577-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1P6Xg3zsnPne6JNtl3kTjRSOa_1ugq8tsX8fET5Qgh2bvU2vgtecHVrkwLQEqL9P24Yl8wQZWb_sDMruIA_VdLImkfxSf9jZUhcyoTnr-aM4RrckkwS_6dx7oDnUaYnHc_aaPFvQ=w1280-h556-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1vxwd2ufU4i1apUQAfFVds-zN0eZ3pSIjevJp13DzvoWbDxdmH99LKWRnQ8sfn0AjVXgsaBoe1q6xQUSdxresQyvecr3B-hmW_oUg-Gj6e4W4RBgv3X9390SYeJiflyx3yPGwc=w608-h792-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN

#### Estructura


#### Vista de Comportamiento


#### (Estática)


#### Comportamiento


#### (Dinámica)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1Gj6843PPmTmJyG8BLyZgdAAEZ2zYy6kMMAZ_AN2Eb_oPq1-4I4PqCqSiWkfuv7veTe9xJpwBfHgc7kAC5zhpggtDfxXFku9ErrL3qwyx0xjf3TL04f0PHeQXds8RZxLikHq3HBw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2nR0O9L4xaDiyKqif2_XQp97y2ehPZsLAEmxLuAmAflbliME2TDsLjExjPEEBckgJIfPbGtUnZOfH8BTFgsmYHnUsQRupIhqVB4lHUJdMTcSd-00R95rQJlzum9iB-cwLsf0dTlw=w1280-h556-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv09ijPaSR02MkhgWqBAmuhI_7tM_5e_PXGmaRMX9u9TSkshAfXZ8HKGNqD_DWKzKMBDkruymtkBiTsG5566gG-SRXwA2xPb5TDj8aLUCweGQBlv_HBPWyF-W0zOqKbpSF7Df8QqoQ=w1280-h617-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0rg_z9EDWaBpxmka4LhfQ5bzfjhx8H9cCuup1S21UtInkr9nqCMivIeSlOC17TxZ-qEXqmQbsac6pS5qn4o5qZB50uqhvPDaHHC9SVcZO291p1X_j9DkJ5_Q9O_V7gQFbMhAEZGw=w768-h656-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32FtCxY1BiFHYu02ERmk6UgDvXD6u8d_BNWEkrZZ9F0Tefk4G-X_imRMmUI6z1ceJTNjlvv3js4B2qNu-EZ12bhsEMxQZbufNfnwZVIt5hHb1vt_PDVhK1hRyUCJ8WZ5Js69FPAQ=w904-h577-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TyqMHbsSm0xZKTU5UXnO6y4HGRfUquCw5ZRHDGng0JVwvf9o6cnabUgyv6uUJsGHtldMyWnH7x-q_bQzaWag-DH4iGwRwaxNIbTODrOdAdp1AQTgKLnMZ5x94rYzDKOTqH4KSbw=w1280-h783-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3gLVNx79dQml1vUhyVP_vpcSDIdDxug2vBFb-LCw24cbXLixWbHyJv8t7pRUDX6lCMB5T-ynCWGOp_GG7xEfIDkRlhSu1CrIln2ENMk7q4FBclAQqbGvCNSCopCYI8nYU-Luow=w1280-h572-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN

#### Estructura


#### Vista de Comportamiento


#### (Estática)


#### Comportamiento


#### (Dinámica)

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NX6HJtimNt3yZohK0GBUPPV7wMDeioCRJvHEfKi22JMPvWqVNXcGepPdyPkfMnU9or9N0NNHNvCDMJ0p92hJWtNm3uBEFPwHSr1VW0noKhgbqs-W1PACQhjHTE8Xa-_UktdMBqA=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2CszpJHsEraEA_ag-tG8cMCT25gZCZlMt2C3XWxuapgo2fSsHgnA-9P-000f5ooXt5u9ZpzeL5qvBpRj-KdjjP683IxCIDxVAPlMlXsrNp0hSDjecSVcHv07dA8r_gp8zjmUjz4A=w1280-h617-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv07z0hF8GMf4EvSJQAnom_1XK1Ywr5i8PiEEg7rGfjHRD7JeStqBWdBwg5NIdtfMlX_hZ2WEd4Ay--vDq1-Ul_jHD9kgBUnrhQq2wREZcjBdjE33U3qO-qdpvO3tNhFVvUJp43EDg=w810-h245-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2AmwyGFpO889cpbo9qO_xvEExc-B3sTQkZtR57c5nxq1928dwNjn75EASbVWzZ_7QyqfoURWTgVFlC8rnpS5whSMIclVQQ9B8EW0a7iK4qP3LRXyGQImZWrNEe8YHrqKKv5BJF=w1280-h1123-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0TYZlLQLVBjcsibwBGkHGkSs6pzLD9RLEvTOdtTKxE6N8fs_sNefoqt_JDHVmajEYtfPI0fOEcHNxQ095Ye3JkQ2zCs3RP1tXWzb2hsu2dl0M0xC0TIcisDFex4QuMqM_GT--fxA=w786-h197-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2m4xm9lDodFVBfEeZGzLrdkNtMJk_h7L_ExNcxxdNb_WGJWJcCtxbPr4aGRBs0mL8lbnMpJxMPaNkNloOXVHmJw3g1gd9obmpgR3N-o06znAhTzk4eme7T1CH8j9ccTX9pYyYh4Q=w340-h159-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Ahora bien, si tenemos un requerimiento como este: “Necesito conocer cuánto tiempo está el pedido en cada estado”
NO
NO¿Con esta estructura de clases podemos satisfacerlo? ¿La máquina de estados se ve afectada con este requerimiento?

## No es ni tuyo, ni mío es algo que pasa entre nosotros

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0NFGqrzJyDw6ZIEZuH7_--bVYbVQa0uPg2GMLCtDrEv-Yp20nntDIVy14CIXMpF9MzmJMV-1b-dRxhGydwJGngrg6WCH4sZ4A-q-Nnx2zl-tXArx-nSa6PWixHJfnZA8RK0tV1Sw=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0P9wCXrKToCEUUdykI_XZsaPo9RiUL5D1o023_RDvSz5qZr0GutpksoW23LhIt6m1ClqAzQjF7idHWVfgss-pF9r9REkk3b9eHqQw-Mzpo072wQiw3_6e6ssM2KjutHDRwZ-cYAA=w1280-h968-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv34_As3rua7w9n-8z7U0LtcoymsxiGRFNQYInT6foe7NvukX4tzc6WOZKI8fkNmy9GtB4STNlLfpfn79JutIesV8hsCd9Z8B-FHFkRDymI9hO2WEP6DPGKWQwrz4fNhw3Rt_EyKgQ=w1280-h617-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Con esta estructura de clases SI podemos satisfacerlo
La máquina de estados NO se ve afectada con este requerimiento
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv13Wp0OZo_61s844xxeNoslMnDlYEch5lkwKPtJdM1GwiTJjfamxOKkselveWD_Am-2Uqp0r3iXZjksDR1USsh_N2sZXO9ZcD-2zn0IuXaNsIFYSLki2t6qlVc_DoMSnk142MQMbg=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2MiyZaonUjD3IYQ1GkvMNfQlLq3z03PuUneTVpzEwQpoqOoodn4x0M5PtJOgtaXd1ghTGN-PJxLFMV5c82flYzJZrBhN6URQfMzRD6Lfu3B7TGTHQimKB5_IW6Sq-p0t0xSa0a=w1280-h530-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0YrGLDXjF1Ylk_xdxpptlTNLTfpif7NalZGXOyhrIstsYug7MrAN0L7cXb1d-nl2kxFOWlX7aegIqKQyu5vUbocCaro6ldRO4ru-GOiy8RRFmmkrFUwXkzw3M7Ni7IL35hqZRJfg=w991-h622-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3jYymR_4jkJbzA9IlCzf-EpUSxnG0IVht6yc7EdKhYMzsb88G7NF3Ri-0_vN31aKI9jexvfpUif_D8e4kcQ96-MDVH44oGfAtAaYAuggjvQ5LSCyoczsNqh3M6QOAI3-OEetpT=w1236-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2ZGIlQogmNchT7zBGp7cNC57qC8fO9h2PeUC3hZETuVGowMI-rgi24rSnRVPeA4CUSlmRXwJrf-gKrkRTa9OweNQhTKz6fCfUBhs1tWCi5qfB4vOtveMg2cvLqHkxph7wMAeyG=w1209-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3F_EUDGeVa5pP8fn0imIYC8HbdR0D6mZcqpsrkGfa6G7nCQ89zwQEH_QovERMQizYL0UsKLUiqAiYBqWFvKi2V-RWjvFQsECFjp3XPM_Ka8BCdi_TZ6LFWFLMVk-7rkyBRMtGheg=w838-h555-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv32amdXUCFqQFMlbkZgYFkAH3MXf86fXPAyP2HliceHzyn4ZsKYRVfIRFxmgfOirIkDOsdAeNnQBj6rXLV0erbySz4pUW7kuBn_lU66ii7-p3GhzdgDM20cLL2vT79amFrMlhUw=w1261-h753-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv0Axx35AZvfqA6ytzDE3ZlgX2ETYOA1WC0Yl0teX0HCoUKwuRjBhMuzJOsGKNJlhcHoiCSzO_EvEtnd1Q-t86GyhDQ_dnd19b80h3SY20yF_hK0rPcbCqQCAXh7Gg846rKPzgVywQ=w1280-h529-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Repasando lo que vimos…

## Diagramas de UML 2.0 PUD como contexto Modelo de Requerimientos


## Workflow de Análisis Modelo de Análisis Objetos con


## comportamiento dependiente del estado


## Modelado con Diag. De Máquina de

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2q85HluofCMLJXeZaI1a6vCobutp7V6yP8AURXzq_ag_VbfjzUKbGNlaFCA5z_q8nM_i28_ZwXnvMroVU6rryq9IumZbBk8ArA-IHRvKXOssW3NaeIVe2y4bpCMYnk5r7XKFLN=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv3DtFx9-hMCYbJdOZ7nyqHMBAV2klwO66A7hAmA33CcvNHAkCf_ac_Yf4gu5SdaCJ8qH49DWBKKJ-5cZwYWvsHMVaoFols62bkzimgwxp6nD8Cx9bgHxeX_RK0zftS3hRrqaeuLKg=w1280-h129-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv2bImAWuZCtchQ8Yv12yfujN5v84LNycIcQ-O2nJM03hTDNxZTaELfmRYcm4l8zI244nqOU3xOJwuAC3Bi5Gq9hVVpKpC3GoJRhqJAgehF5Zl-aEmvR7UyQ4GgjPapLN-tRDNux=w1280-h141-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv175F5rJl1D7dMMAudY0kpoIqsaniF3rZ7OQl5pPxJGhvnKYINMky6-jeIfyNhGGFbwdwxoBaQXp5YMr7IZBvEGG4Di4C-UYcFmAl9wFfZbI_pY4bc1JUTRfKZ9O4DsZETC_cM0YA=w903-h406-v0?authuser=0)
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

### Transición

![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv1F9cjEiSDRXHyB_3DQrNypyqgiTu-Al5Va2EhfOhjuXjn1ug-xcRhMDaSDxVWES2c-pWNVlxTNwFyg7h9OKebafBcHhMAoK75WVNa8iqwMQwhJxXlLqFE-3PTJ1z2TBR8muOjqwQ=w501-h100-v0?authuser=0)
![imagen](https://lh3.googleusercontent.com/notebooklm/ABzcPv05K-bjT_pWoMLfmQfDCy6-s7lrztELxFKVX4Mrm7sTeNRDcCzhYs_VwWBl2b6Ccn_AM8RRE7oHCQGV_hZ_EB6mQsOzgH091eWfkoL_v1D-ZcMtKyykxR_xgNVqdG-BwaKWgsPxWg=w300-h200-v0?authuser=0)
CÁTEDRA DE DISEÑO DE SISTEMAS
DE INFORMACIÓN
Finalmente…
Muchas Gracias!!!
