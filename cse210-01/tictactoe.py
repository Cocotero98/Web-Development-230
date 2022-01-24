def main():
    board=[1,2,3,4,5,6,7,8,9]
    show_board(board)
    player=''
    while not(has_winner(board) or is_a_draw(board)):
        player=next_player(player)
        choice=choose(player)
        change_board(board, choice, player)
    print("Good game. Thanks for playing!") 

def next_player(player):
    if player=='' or player=='o':
        return "x"
    else:
        return "o"

def show_board(board):
    print(f'{board[0]}|{board[1]}|{board[2]}')
    print('-+-+-')
    print(f'{board[3]}|{board[4]}|{board[5]}')
    print('-+-+-')
    print(f'{board[6]}|{board[7]}|{board[8]}')

def change_board(board, choice, player):
    choice=choice-1
    board[choice]=player
    print(f'{board[0]}|{board[1]}|{board[2]}')
    print('-+-+-')
    print(f'{board[3]}|{board[4]}|{board[5]}')
    print('-+-+-')
    print(f'{board[6]}|{board[7]}|{board[8]}')

def choose(player):
    choice=int(input(f"{player}'s turn to choose a square (1-9):"))
    return choice

def is_a_draw(board):
    for square in range(9):
        if board[square] != "x" and board[square] != "o":
            return False
    return True 
    
def has_winner(board):
    return (board[0] == board[1] == board[2] or
            board[3] == board[4] == board[5] or
            board[6] == board[7] == board[8] or
            board[0] == board[3] == board[6] or
            board[1] == board[4] == board[7] or
            board[2] == board[5] == board[8] or
            board[0] == board[4] == board[8] or
            board[2] == board[4] == board[6])

if __name__ == "__main__":
    main()
