#pragma strict

function Start () {

}

function Update () {
	transform.position.x = Mathf.PingPong(Time.time, 2.0) - 1.0;
}