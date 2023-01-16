def chaveGeral(lista_pontos):
    numero_de_chaves = len(lista_pontos) // 3
    cont = 0
    lista = []
    incrementa = True
    aux = False

    for numero in range(0, numero_de_chaves):
        lista.append([])

    for dupla in lista_pontos:
        if cont == numero_de_chaves - 1:
            if aux:
                incrementa = False
                aux = False
            else:
                aux = True
                cont = numero_de_chaves - 2
        if incrementa and dupla != lista_pontos[0]:
            cont += 1
        elif not incrementa and cont != 0:
            cont -= 1
        else:
            incrementa = True
        lista[cont].append(dupla)
    print(lista)


chaveGeral(["Felipe", "Duda", "Maria", "Pedro",
           "Alipio", "Ana", "João", "Nicolas", "André", "AAA"])
