#pragma strict

public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;

function Start () {

}

function Update ()
{
    if(Input.GetKey(KeyCode.UpArrow))
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.DownArrow))
        transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
}
