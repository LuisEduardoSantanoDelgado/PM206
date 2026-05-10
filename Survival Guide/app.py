from flask import Flask, render_template, request, session, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = os.urandom(24)

RESPUESTAS = {
    1: {"q1": "80", "q2": "classroom"},
    2: {"q1": "40", "q2": "10"},
    3: {"q1": "moviles", "q2": "interfaces"},
    4: {"q1": "17-08", "q2": "agosto"}
}

@app.route('/')
def index():
    nivel = session.get('nivel', 1)
    return render_template('index.html', nivel=nivel)

@app.route('/verify/<int:level>', methods=['POST'])
def verify(level):
    current_level = session.get('nivel', 1)
    
    if level != current_level:
        return redirect(url_for('index'))
        
    correctas = RESPUESTAS.get(level)
    if not correctas:
        return redirect(url_for('index'))
    
    user_q1 = request.form.get('q1', '').lower().strip()
    user_q2 = request.form.get('q2', '').lower().strip()
    user_commit = request.form.get('commitment')
    
    if user_q1 == correctas['q1'] and user_q2 == correctas['q2'] and user_commit == 'on':
        session['nivel'] = current_level + 1
        flash('Exito! Has desbloqueado la siguiente seccion.', 'success')
    else:
        flash('Respuestas incorrectas o compromiso no aceptado. Intenta de nuevo.', 'error')
        
    return redirect(url_for('index') + f'#level-{current_level}')

@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5001)
